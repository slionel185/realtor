'use client'

import { signIn } from 'next-auth/react'
import { FcGoogle } from 'react-icons/fc'

import { Button } from '@/components/ui/button'
import { DEFAULT_LOGIN_REDIRECT } from '@/utils/routes'

export const Social = () => {
    const onClick = (provider: 'twitch' | 'github') => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }

    return (
        <div className='flex items-center w-full'>
            <Button className='w-full' size='lg' variant='outline' onClick={() => onClick('twitch')}>
                <FcGoogle className='g-5 w-5 mr-2' />
                Continue with Google
            </Button>
        </div>
    )
}