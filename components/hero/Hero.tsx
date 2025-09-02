import Link from 'next/link'
import React from 'react'
import HeroImage from '../heroImage/heroImage'
import HeroShapes from '../heroShapes/HeroShapes'


export default function Hero() {
    return (
        <div className='w-full flex flex-wrap items-center justify-center gap-10 lg:h-[90vh] md:h-[90vh] h-fit' >
            <div className='w-full lg:w-[45%] md:w-[45%] '>
                <p className='text-white text-4xl font-extrabold leading-[4rem]' >
                    Hi! I&apos;m Fatima Souliman
                    <br />
                    I&apos;m a front end developer ...
                </p>
                <p className='text-white text-xl font-medium leading-[3rem]' >
                    I design and develop interactive interfaces using React and Next.js.
                </p>
                <div className='flex w-full items-center justify-between pt-10' >
                    <Link href={"/projects"} className='hover:shadow-[inset_0px_1px_20px_20px_#ffffff61] transition-all duration-700 flex items-center justify-center w-[45%] cursor-pointer h-12 bg-accent border-0 rounded text-white font-medium ' >View my work</Link>
                    <Link href={"/contact"} className='hover:shadow-[inset_0px_1px_20px_20px_#4f17876b] transition-all duration-700 flex items-center justify-center w-[45%] cursor-pointer h-12 bg-white border border-accent rounded text-accent font-medium ' >Contact</Link>
                </div>
            </div>
            <div className='relative w-full md:w-[50%] lg:w-[50%] h-full'>
                <HeroShapes/>
                <HeroImage />
            </div>


        </div>
    )
}
