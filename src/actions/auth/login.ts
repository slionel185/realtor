'use server'

import { z } from 'zod'
import { AuthError } from 'next-auth'

import { db } from '@/utils/db'
import { signIn } from '@/utils/auth'
import { LoginSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'
import { DEFAULT_LOGIN_REDIRECT } from '@/utils/routes'
import { getTwoFactorTokenByEmail } from '@/data/two-factor-token'
import { sendVerificationEmail, sendTwoFactorTokenEmail } from '@/utils/mail'
import { generateVerificationToken, generateTwoFactorToken } from '@/utils/token'
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation'

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)
    if(!validatedFields.success) return {
        error: 'Invalid Fields!'
    }

    const { email, password, code } = validatedFields.data

    const existingUser = await getUserByEmail(email)
    if(!existingUser || !existingUser.email || !existingUser.password) {
        return {
            error: 'Email does not exist!'
        }
    }

    if(!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email)
        await sendVerificationEmail(verificationToken.email, verificationToken.token)

        return {
            success: 'Confirmation email sent!'
        }
    }

    if(existingUser.isTwoFactorEnabled && existingUser.email) {
        if(code) {
            const  twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email)
            if(!twoFactorToken) {
                return {
                    error: 'Invalid code!'
                }
            }

            if(twoFactorToken.token !== code) {
                return {
                    error: 'Invalid code!'
                }
            }

            const hasExpired = new Date(twoFactorToken.expires) < new Date()
            if(hasExpired) {
                return {
                    error: 'Code expired!'
                }
            }

            await db.twoFactorToken.delete({
                where: {
                    id: twoFactorToken.id
                }
            })

            const existingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)
            if(existingConfirmation) {
                await db.twoFactorConfirmation.delete({
                    where: {
                        id: existingConfirmation.id
                    }
                })
            }

            await db.twoFactorConfirmation.create({
                data: {
                    userId: existingUser.id
                }
            })
        } else {
            const twoFactorToken = await generateTwoFactorToken(existingUser.email)
            await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token)

            return {
                twoFactor: true
            }
        }
    }

    try {
        await signIn('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch(err) {
        if(err instanceof AuthError) {
            switch(err.type) {
                case 'CredentialsSignin':
                    return {
                        error: 'Invalid credentials!'
                    }
                default:
                    return {
                        error: 'Something went wrong!'
                    }
            }
        }

        throw err
    }
}