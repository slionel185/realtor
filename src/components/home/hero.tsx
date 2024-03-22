import { Button } from '@/components/ui/button'

export const Hero = () => {
    return (
        <div className='bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-violet-200 via-pink-200 to-orange-200 h-[500px] grid grid-cols-5'>
            <div className='col-span1' />
            
            <div className='col-span-2 h-full flex flex-col justify-center items-center'>
                <h1 className='text-white font-bold text-7xl drop-shadow-xl'>Helping Realtors Find Better Leads</h1>
                <p className='w-full text-left text-black/15 font-bold text-2xl'>Something needs to go here</p>
            </div>

            <div className='col-span-1' />
        </div>
    );
};