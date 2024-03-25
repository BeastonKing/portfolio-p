import React from 'react';

export default function Title({text, className, len = 40}:{text:string, className?: string, len?:number}) {
    return (
        <div className={className}>
            <h1 className='text-3xl font-bold group-hover:text-green-400 transition-all'>
                {text}
            </h1>
            <div className={`w-${len} h-2 bg-green-500 rounded-full`}></div>
            <div className={`w-${len} h-2 bg-indigo-500 rounded-full translate-x-2`}></div>
        </div>
    );
}
