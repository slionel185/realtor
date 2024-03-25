import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/home/hero'
import { Quote } from '@/components/home/quote'
import { Pricing } from '@/components/home/pricing'
import { Questions } from '@/components/home/questions'
import { Footer } from '@/components/home/footer'
export default function HomePage() {    
    return (
        <div className='flex flex-col'>
            <Navbar />

            <Hero />
            
            <Quote>
                Some quote that will show how good the product has been for someone or something
            </Quote>
            
            <div className="bg-gray-50">
             <Pricing />
            </div>
            <div className="bg-gray-50">
            <Questions />
            </div>
            <Footer />
        </div>
    );
}