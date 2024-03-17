import { Button } from '@/components/ui/button'

export const Hero = () => {
    return (
        <div className='bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-violet-200 via-pink-200 to-orange-200 h-[500px] grid grid-cols-5 py-10'>
            <div className='col-span1' />
            <div className='bg-background col-span-2 h-full rounded-xl shadow border p-4 flex flex-col justify-between'>
                <div>
                   <p className='text-4xl mb-4'>Purpose</p>
                   <p className='text-5xl'>Helping Real Estate Agents Obtain Better Leads</p>
                </div>
                 <div className='flex justify-center'> 
                <Button>Sign Up</Button>
            </div>
        </div>
        <div className='col-span-1' />
    </div>


    );
};