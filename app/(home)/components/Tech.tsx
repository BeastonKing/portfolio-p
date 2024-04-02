"use client";
import React from 'react';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { FaJava } from 'react-icons/fa';
import {
    SiDjango,
    SiExpress,
    SiLaravel,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiPython,
    SiReact,
    SiSpringboot,
} from 'react-icons/si';

export default function Tech() {
    const tech = [
        {
            text: 'Java',
            Icon: FaJava,
        },
        {
            text: 'Python',
            Icon: SiPython,
        },
        {
            text: 'PHP',
            Icon: SiPhp,
        },
        {
            text: 'Javascript (Node)',
            Icon: SiNodedotjs,
        },
        {
            text: 'Express.js',
            Icon: SiExpress,
        },
        {
            text: 'Spring Boot',
            Icon: SiSpringboot,
        },
        {
            text: 'Django',
            Icon: SiDjango,
        },
        {
            text: 'Laravel',
            Icon: SiLaravel,
        },
        {
            text: 'PostgreSQL',
            Icon: SiPostgresql,
        },
        {
            text: 'MySQL',
            Icon: SiMysql,
        },
        {
            text: 'MongoDB',
            Icon: SiMongodb,
        },
        {
            text: 'React',
            Icon: SiReact,
        },
        // {
        //     text: 'Next',
        //     Icon: SiNextdotjs,
        //     isCurrentlyLearning: true
        // },
    ];

    return (
        <div className=' max-w-5xl mx-auto px-8 animate-move-up'>
            <Title
                text='Tech 🔧'
                len={32}
                className='flex flex-col items-center justify-center -rotate-3'
            />

            <HoverEffect items={tech} />
        </div>
    );
}
