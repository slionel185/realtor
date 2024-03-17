import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/home/hero'

export default function HomePage() {    
    return (
        <div className='flex flex-col'>
            <Navbar />
            <Hero />
        </div>
    )
}