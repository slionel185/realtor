import { Button } from '@/components/ui/button'
import { Container } from '@/components/container'

export const Pricing = () => {
    return (
        <Container id="pricing" className='grid lg:grid-cols-3 gap-8'>
            <div id='basic' className='p-6 flex flex-col items-center rounded shadow-md bg-white gap-2'>
                <h1 className='text-3xl font-semibold uppercase bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-violet-200 via-pink-200 to-orange-200 text-transparent bg-clip-text'>Basic</h1>
                <h2 className='text-xl'>$9.99</h2>

                <div className="mt-4 mb-8 w-full border-t border-gray-300"></div>

                <div>
                    <p>Feature flag</p>
                    <div className="mt-4 mb-8 w-full border-t border-gray-300"></div>
                    <p>Feature flag</p>
                    <div className="mt-4 mb-8 w-full border-t border-gray-300"></div>
                    <p>Feature flag</p>
                    <div className="mt-4 mb-8 w-full border-t border-gray-300"></div>
                </div>

                <Button>
                    Get Started
                </Button>
            </div>

            <div id='plus' className='p-6 flex flex-col items-center rounded shadow-md bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-violet-200 via-pink-200 to-orange-200 gap-2'>
                <h1 className='text-3xl font-semibold uppercase text-white drop-shadow'>Plus</h1>
                <h2 className='text-xl'>$9.99</h2>

                <div className="mt-4 mb-8 w-full border-t border-white"></div>

                <div>
                    <p>Feature flag</p>
                    <div className="mt-4 mb-8 w-full border-t border-white"></div>
                    <p>Feature flag</p>
                    <div className="mt-4 mb-8 w-full border-t border-white"></div>
                    <p>Feature flag</p>
                    <div className="mt-4 mb-8 w-full border-t border-white"></div>
                </div>

                <Button>
                    Get Started
                </Button>
            </div>

            <div id='premium' className='p-6 flex flex-col items-center rounded shadow-md bg-white gap-2'>
                <h1 className='text-3xl font-semibold uppercase bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-violet-200 via-pink-200 to-orange-200 text-transparent bg-clip-text'>Premium</h1>
                <h2 className='text-xl'>$9.99</h2>

                <div className="mt-4 mb-8 w-full border-t border-gray-300"></div>

                <div>
                    <p>Feature flag</p>
                    <div className="mt-4 mb-8 w-full border-t border-gray-300"></div>
                    <p>Feature flag</p>
                    <div className="mt-4 mb-8 w-full border-t border-gray-300"></div>
                    <p>Feature flag</p>
                    <div className="mt-4 mb-8 w-full border-t border-gray-300"></div>
                </div>

                <Button>
                    Get Started
                </Button>
            </div>
        </Container>
    )
} 