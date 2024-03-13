import crypto from 'crypto'
import { v4 as uuid } from 'uuid'

import { db } from '@/utils/db'
import { getTwoFactorTokenByEmail } from '@/data/two-factor-token'
import { getVerificationTokenByEmail } from '@/data/verification-token'
import { getPasswordResetTokenByEmail } from '@/data/password-reset-token'

export const generateTwoFactorToken = async (email: string) => {
    const token = crypto.randomInt(100_000, 1_000_000).toString()
    const expires = new Date(new Date().getTime() + 5 * 60 * 10000)

    const existingToken = await getTwoFactorTokenByEmail(email)

    if(existingToken) {
        await db.twoFactorToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }

    const twoFactorToken = await db.twoFactorToken.create({
        data: {
            email,
            token,
            expires
        }
    })

    return twoFactorToken
}

export const generateVerificationToken = async (email: string) => {
    const token = uuid()
    const expires = new Date(new Date().getTime() + 3600 * 1000)

    const existingToken = await getVerificationTokenByEmail(email)

    if(existingToken) {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }

    const verificationToken = await db.verificationToken.create({
        data: {
            email,
            token,
            expires
        }
    })

    return verificationToken
}

export const generatePasswordResetToken = async (email: string) => {
    const token = uuid()
    const expires = new Date(new Date().getTime() + 3600 * 1000)

    const existingToken = await getPasswordResetTokenByEmail(email)

    if(existingToken) {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }

    const passswordReserToken = await db.verificationToken.create({
        data: {
            email,
            token,
            expires
        }
    })

    return passswordReserToken
}