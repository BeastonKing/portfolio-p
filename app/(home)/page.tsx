import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';

export default function page() {
    return (
        <div className='min-h-[400vh] bg-black overflow-hidden'>
            <div className='dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2]'>
                <div className='max-w-7xl mx-auto p-5'>
                    <Navbar />
                    <Hero />
                </div>
            </div>

            <div className='max-w-7xl mx-auto p-5 mt-20'>
                <Tech />
            </div>
        </div>
    );
}
