import Link from 'next/link';
import React from 'react';
import Title from './Title';

export default function Hero() {
    return (
        <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between'>
            <div className=' space-y-10 text-center lg:text-left break-words'>
                <h2 className='text-4xl lg:text-7xl font-bold'>Hello! 👋</h2>
                <span className='text-5xl lg:text-8xl font-bold underline underline-offset-8 decoration-green-500'>I'm Bintang.</span>

                <p className='md:w-96 text-lg text-gray-300'>
                    {
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. A quaerat fugit sapiente expedita exercitationem voluptatem.'
                    }
                </p>

                <Link className=' inline-block group' href={'mailto:bintang0102pratama@gmail.com'}>
                    <Title text='Chat with me.' len={50} />
                </Link>

            </div>

            <div>
                <div className='w-72 h-72 space-y-3 -rotate-[30deg] relative'>
                    <div className='flex gap-3 translate-x-8'>
                        <div className='w-32 h-32 rounded-full bg-red-500'></div>
                        <div className='w-32 h-32 rounded-2xl bg-blue-300'></div>
                    </div>
                    <div className='flex gap-3 -translate-x-8'>
                        <div className='w-32 h-32 rounded-2xl bg-blue-300'></div>
                        <div className='w-32 h-32 rounded-full bg-red-500'></div>
                    </div>
                    <div className="glow-2 absolute top-[40%] right-1/2 -z-10"></div>
                </div>
            </div>
        </div>
    );
}
