import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/home/hero'
import { Quote } from '@/components/home/quote'
import { Pricing } from '@/components/home/pricing'

export default function HomePage() {    
    return (
        <div className='flex flex-col'>
            <Navbar />

            <Hero />
            
            <Quote>
                Some quote that will show how good the product has been for someone or something
            </Quote>

            <Pricing />
        </div>
    )
}