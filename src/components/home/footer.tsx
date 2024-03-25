import React from 'react';
import { Container } from '@/components/container';

export const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-violet-200 via-pink-200 to-orange-200 text-black py-8">
            <Container className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-8 md:mb-0">
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
                        <div>
                            <a href="#" className="underline hover:no-underline">Contact Us</a>
                        </div>
                        <div>
                            <a href="#" className="underline hover:no-underline">FAQ</a>
                        </div>
                        <div>
                            <a href="#" className="underline hover:no-underline">Help</a>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-5xl font-semibold">Realtor</h2>
                    </div>
                </div>
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold">Follow Us</h2>
                    <div className="flex justify-center md:justify-start">
                        <a href="#" className="mr-4">Facebook</a>
                        <a href="#" className="mr-4">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>
                </div>
            </Container>
            <hr className="border-gray-300 my-4" />
            <Container className="text-center md:text-right">
                <div>
                    <a href="#" className="underline hover:no-underline mr-4">Legal</a>
                    <a href="#" className="underline hover:no-underline mr-4">Terms of Service</a>
                    <a href="#" className="underline hover:no-underline">Privacy</a>
                </div>
            </Container>
        </footer>
    );
};
