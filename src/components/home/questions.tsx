import React from 'react';
import { Container } from '@/components/container';

export const Questions = () => {
    return (
        <Container id="questions" className='grid grid-cols-2 gap-0 w-full bg-gray-50 py-8'>
            <div id='left-section' className='p-6 flex flex-col items-center rounded-l shadow-sm bg-white col-span-1'>
                <h1 className='text-3xl font-semibold uppercase text-black'>Questions</h1>

                <div>
                <div className="mt-4 mb-8 w-full border-t border-gray-300"></div> 
                    <div className='mb-4'>
                        <h2 className='text-xl'>Why We Made This?</h2>
                        <p>Answer explaining why</p>
                    </div>
                    <div className="mt-4 mb-8 w-full border-t border-gray-300"></div>
                    <div className='mb-4'>
                        <h2 className='text-xl'>Who's It For?</h2>
                        <p>Answer explaining target audience & their pain point</p>
                    </div>
                    <div className="mt-4 mb-8 w-full border-t border-gray-300"></div>
                    <div className='mb-4'>
                        <h2 className='text-xl'>What Makes This Unique?</h2>
                        <p>Answer explaining what separates us from the competition</p>
                    </div>
                </div>
            </div>

            <div id='right-section' className='p-6 flex flex-col items-center rounded-r shadow-sm bg-white col-span-1'>
            <div className="image-container">
                    <img src="https://bhgrecareer.com/bebetterblog/wp-content/uploads/sites/11/elementor/thumbs/licenseAgent-plxdce5prgyj7hf0dzfn2jh6xfqkct7rjsfxzghwfs.jpg" alt="Real Estate Agent" />
                </div>
            </div>
        </Container>
    );
};
