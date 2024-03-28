import React from 'react';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { LuExternalLink } from "react-icons/lu";

export default function Projects() {
    const extProjects = [
        {
            title: "Indonesia's International Coaching Summit",
            desc: "Official website of Indonesia's International Coaching Summit (IICS) 2023.",
            link: 'https://iics.icfjakarta.org/',
            isAvailable: true,
            cover: '/icf-1.png',
            background: 'bg-indigo-500',
        },
        {
            title: 'Coaching Yuk',
            link: 'https://www.coachingyuk.com/',
            isAvailable: true,
            desc: 'A coaching platform for those who seek guidance and encouragement by professional and certified coaches.',
            cover: '/cyuk-1.png',
            background: 'bg-green-500',
        },
        {
            title: 'Makro Alpha Solusindo ERP',
            link: '#',
            isAvailable: false,
            desc: 'A highly-customized ERP and CMS for PT. Makro Alpha Solusindo.',
            cover: '/mas-cms-1.png',
            background: 'bg-yellow-500',
        },
        {
            title: 'My Medione',
            link: '#',
            isAvailable: false,
            desc: 'A mobile-based hospital appointment app that provide healthcare information for users to see details, manage, and schedule an appointment.',
            cover: '/med-1.png',
            background: 'bg-cyan-500',
        },
        {
            title: 'Bima Harsa Rahardja Company Page',
            link: 'https://www.bimaharsarahardja.co.id/',
            isAvailable: true,
            desc: 'A company landing page designed for PT Bima Harsa Rahardja.',
            cover: '/bhr-1.png',
            background: 'bg-red-500',
        },
    ];

    const personalProjects = [
        {
            title: 'Personal Website',
            link: '#',
            isAvailable: false,
            desc: 'The first version of my Porfolio Website',
            cover: '/personal-pp.png',
            background: 'bg-indigo-500',
        },
    ];

    return (
        <div className='py-10 p-5 sm:p-0'>
            <Title
                text='Projects 💻'
                className='flex flex-col items-center justify-center rotate-3'
            />

            <h2 className='mt-10 mb-1 text-center font-bold italic text-lg md:text-2xl'>Projects I&apos;ve Worked On</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-3 gap-5'>
                {extProjects.map((project, index) => {
                    return (
                        <Link href={project.link} key={index} scroll={false} target={project.isAvailable ? '_blank' : '_self'}>
                            <div
                                className={cn(
                                    'p-4 rounded-md',
                                    project.background
                                )}
                            >
                                <DirectionAwareHover
                                    imageUrl={project.cover}
                                    className= {cn('w-full space-y-5', project.isAvailable ? 'cursor-pointer' : 'cursor-default')} 
                                >
                                    <div className=' space-y-1'>
                                        <h1 className='text-xl font-bold'>{project.title}</h1>
                                        <div className='text-sm'>
                                            {project.desc}
                                        </div>
                                        { project.isAvailable ? <div className='my-0'>
                                            <LuExternalLink className='text-lg' />
                                        </div> : '' }
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <h2 className='mt-16 mb-1 text-center font-bold italic text-lg md:text-2xl'>Personal Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 pt-3 gap-5 items-center'>
                {personalProjects.map((project, index) => {
                    return (
                        <Link href={project.link} key={index} scroll={false} target={project.isAvailable ? '_blank' : '_self'}>
                            <div
                                className={cn(
                                    'p-5 rounded-md',
                                    project.background
                                )}
                            >
                                <DirectionAwareHover
                                    imageUrl={project.cover}
                                    className= {cn('w-full space-y-5', project.isAvailable ? 'cursor-pointer' : 'cursor-default')} 
                                >
                                    <div className=' space-y-3'>
                                        <h1 className='text-xl font-bold'>{project.title}</h1>
                                        <div className='text-sm'>
                                            {project.desc}
                                        </div>
                                        { project.isAvailable ? <div className='my-0'>
                                            <LuExternalLink className='text-lg' />
                                        </div> : '' }
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
