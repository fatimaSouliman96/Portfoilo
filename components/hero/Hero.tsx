import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div className='w-full flex flex-wrap items-center justify-center gap-10  h-[90vh]' >
            <div className=' w-[45%] '>
                <p className='text-white text-4xl font-extrabold leading-[4rem]' >
                    Hi! I'm Fatima Souliman 
                    <br />
                    I'm a front end developer ...
                </p>
                <p className='text-white text-xl font-medium leading-[3rem]' >
                   I design and develop interactive interfaces using React and Next.js.
                </p>
                <div className='flex w-full items-center justify-between pt-10' >
                    <button className='w-[45%] cursor-pointer h-12 bg-accent border-0 rounded text-white font-medium ' >View my work</button>
                    <button className='w-[45%] cursor-pointer h-12 bg-white border border-accent rounded text-accent font-medium ' >Contact</button>
                </div>
            </div>
            <div className='relative w-[50%] h-full'>
                {/*  dotes */}
                <div className='w-16 grid grid-cols-3 gap-3 absolute top-28 right-20'>
                    {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className='rounded-full h-4 w-4 bg-muted' />
                    ))}
                </div>

                {/* The corner */}
                <div className='w-10 h-10 border-t-4 rounded border-r-4 border-muted absolute top-24 right-16'></div>

                {/* orange organic shape*/}
                <div className='absolute bottom-20 left-36 w-16 h-16 bg-muted rounded-[50%_40%_30%_60%/60%_40%_30%_50%] opacity-80'></div>

                {/* pink curved shape*/}
                <div className='absolute top-28 left-36 w-20 h-4 bg-accent rounded-full rotate-45'></div>

                {/* pink triangle*/}
                <div className='absolute bottom-24 right-20 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-accent'></div>

                <div className='w-[70%] h-[500px] relative ml-16' >
                    {/* الصورة */}
                    <Image
                        src={"/hero.png"}
                        fill
                        style={{ objectFit: 'cover' }}
                        className='pt-20 pl-40'
                        unoptimized={true}
                        alt="Fatima Souliman"
                    />
                </div>
            </div>


        </div>
    )
}
