import type { NextAuthConfig } from 'next-auth'

import bcrypt from 'bcryptjs'
import google from 'next-auth/providers/google'
import credentials from 'next-auth/providers/credentials'

import { env } from '@/utils/env'
import { LoginSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'

export default {
    providers: [
        google({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        }),
        credentials({
            async authorize(credentials) {
                const validatedFields = LoginSchema.safeParse(credentials)

                if(validatedFields.success) {
                    const { email, password } = validatedFields.data

                    const user = await getUserByEmail(email)
                    if(!user || !user.password) return null

                    const passwordMatch = await bcrypt.compare(password, user.password)

                    if(passwordMatch) return user
                }
                
                return null
            }
        })
    ]
} satisfies NextAuthConfig