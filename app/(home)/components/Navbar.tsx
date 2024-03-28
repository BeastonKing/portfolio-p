import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import { SiDiscord, SiGithub, SiLinkedin } from 'react-icons/si';

export default function Navbar({ className }: { className?: string }) {
    const socials = [
        {
            link: 'https://www.linkedin.com/in/bntpratama/',
            label: 'LinkedIn',
            icon: SiLinkedin,
        },
        {
            link: 'https://github.com/BeastonKing/',
            label: 'GitHub',
            icon: SiGithub,
        },
        {
            link: 'https://discordapp.com/users/557081944098209793/',
            label: 'Discord',
            icon: SiDiscord,
        },
    ];

    return (
        <nav className={cn('py-10 flex justify-between items-center animate-move-down', className)}>
            <h1 className=' text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>
                Bintang ⭐
            </h1>
            <div className=' flex items-center gap-5'>
                {socials.map((social, idx) => {
                    const Icon = social.icon;

                    return (
                        <Link
                            href={social.link}
                            key={idx}
                            aria-label={social.label}
                        >
                            <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
