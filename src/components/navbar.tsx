'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Container } from '@/components/container'

export const Navbar = () => {
    return (
        <div className='h-24 bg-background/15 sticky w-full border-b px-8 2xl:px-0'>
            <Container className='h-full flex items-center gap-6'>
                <div className='flex items-center'>
                    <h1 className='text-4xl font-semibold uppercase'>Realtor</h1> 
                </div>
                <div>
                    <Button className='text-md' variant={'link'} asChild>
                        <Link href={'#about'}>
                            About
                        </Link>
                    </Button>

                    <Button className='text-md' variant={'link'} asChild>
                        <Link href={'#pricing'}>
                            Pricing
                        </Link>
                    </Button>

                    <Button className='text-md' variant={'link'} asChild>
                        <Link href={'#contact'}>
                            Contact
                        </Link>
                    </Button>
                </div>
            </Container>
        </div>
    )
}