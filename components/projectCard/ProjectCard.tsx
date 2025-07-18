import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard() {
    return (
        <div className='w-full bg-white/5 rounded-[3rem] shadow-[0px_6px_10px_0px_rgba(23,19,63,0.25)]' >
            <div className='relative w-full h-48 rounded-[3rem]' >
                <Image style={{ objectFit: 'cover' }} className='rounded-[3rem]' src='/about-img2.png' fill alt='project' />
            </div>
            <div className=' p-8 ' >
                <h1 className='text-white font-bold text-xl '>Project 1</h1>
                <p className='text-white pt-2 pb-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem esse nobis provident, eaque, culpa quos possimus corporis facilis eligendi repudiandae iste sunt incidunt maiores accusantium obcaecati nesciunt nulla dolorum placeat?
                </p>
                <Link href="#" className='text-white font-bold bg-accent rounded-[3rem] p-2 mt-6 hover:bg-white hover:text-accent transition-all duration-300' >See more <Image alt='arrow' width={10} height={10} src="/arrow-right-white.svg" /> </Link>
            </div>
            
        </div>
    )
}
