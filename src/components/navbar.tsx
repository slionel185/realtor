'use client'

import { Container } from '@/components/container'

export const Navbar = () => {
    return (
        <div className='h-24 bg-background/15 sticky w-full border-b px-8 2xl:px-0'>
            <Container className='h-full flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <div className='text-4xl font-semibold uppercase'>
                        Realtor
                    </div>
                    <span className="text-base ml-2">
                            <a href="#section1" className="text-black-600">Dashboard</a>
                        </span>
                        <span className="text-base ml-2">
                            <a href="#section2" className="text-black-600">Products</a>
                        </span>
                        <span className="text-base ml-2">
                            <a href="#section3" className="text-black-600">Etc</a>
                        </span>   
                </div>
            </Container>
        
        </div>
    )
}