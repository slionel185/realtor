import { Container } from '@/components/container'

export const Quote =({ children }: { children: React.ReactNode }) => {
    return (
        <Container className='flex flex-col justify-center items-center my-24 gap-4'>
            <blockquote className='text-4xl text-black font-light max-w-3xl'>
                "{children}"
            </blockquote>

            <p className='font-bold'>Seth Torrence</p>
        </Container>
    )
}