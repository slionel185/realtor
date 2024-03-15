'use client'

import { Button } from '@/components/ui/button'
import { useCurrentUser } from '@/hooks/use-current-user'
import { LoginButton } from '@/components/auth/login-button'

export default function HomePage() {
    const user = useCurrentUser()
    
    return (
        <div>
            <h1>Hello, {user?.name}</h1>

            <Button>
                <LoginButton>
                    Login
                </LoginButton>
            </Button>
        </div>
    )
}