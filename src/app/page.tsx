import { Button } from '@/components/ui/button'
import { LoginButton } from '@/components/auth/login-button'

export default function HomePage() {
    return (
        <div>
            <h1>Landing Page</h1>

            <Button>
                <LoginButton>
                    Login
                </LoginButton>
            </Button>
        </div>
    )
}