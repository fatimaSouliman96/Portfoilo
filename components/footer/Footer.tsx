import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className="relative w-full bg-gradient-to-b bg-black pt-8 ">
            <div className='w-full h-[1px] bg-secondary mb-8 shadow-[-3px_5px_20px_0px_#ffffff]' ></div>
            <div className=' px-16 grid lg:grid-cols-[auto_auto_auto_auto] md:grid-cols-[auto_auto] grid-cols-[auto]   items-start 
            lg:gap-[12%]
            md:gap-[10%]
            
            '>
                <div className=" relative flex flex-col gap-10">
                    <Image src="/fatima.png" width={150} height={200} alt="sorbon-logo" />

                </div>
                <div>
                    <p className='721min:text-xl pb-2 text-lg font-medium text-white' >Navigation</p>
                    <ul className='flex flex-col gap-2 pt-2'>
                        <li className='721min:text-base text-base font-extralight text-[#ffffffab]'><Link href={"/"} >Home</Link></li>
                        <li className='721min:text-base text-base font-extralight text-[#ffffffab]'><Link href={"/about"} >About</Link></li>
                        <li className='721min:text-base text-base font-extralight text-[#ffffffab]'><Link href={"/contact"} >Contact Me</Link></li>
                    </ul>
                </div>
                <div>
                    <p className='721min:text-xl pb-2 text-lg font-medium text-white' >Contact Information</p>
                    <ul className='flex flex-col gap-2 pt-2'>
                        <li className='text-base font-light flex items-center text-[#ffffffab] gap-2'>
                            <Image className='opacity-[0.6]' width={24} height={24} src='/phone.svg' alt="phone" />
                            +963 994 081 932
                        </li>
                        <li className='text-base font-light flex items-center text-[#ffffffab] gap-2'>
                            <Image className='opacity-[0.6]' width={24} height={24} src='/email.svg' alt="email" />
                            <Link href="#" className='flex flex-wrap shrink-0' >fatima@<p>96souliman</p><p>@gmail.com</p></Link>
                        </li>
                        <li className='text-base font-light flex  items-center text-[#ffffffab] gap-2'>
                            <Image className='opacity-[0.6]' width={24} height={24} src='/linkedin.svg' alt="location" />
                            Šancová 356861 - 831 04 Bratislava, Slovakia
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='text-base font-light flex items-center text-white gap-2'>Stay Tuned</p>
                    <ul className='flex items-center gap-4 pt-1' >
                        <li><Image width={20} height={20} alt='facebook' src='/facebook.svg' /></li>
                        <li><Image width={20} height={20} alt='insta' src='/insta.svg' /></li>
                        <li><Image width={20} height={20} alt='x' src='/x.svg' /></li>
                        <li><Image width={20} height={20} alt='youtube' src='/youtube.svg' /></li>
                    </ul>
                </div>
            </div>

            <div className='flex w-full flex-col lg:pt-4 pt-4 913max:pt-10' >
                <span className='bg-[#6d6b8c] block w-full h-[2px]'></span>
                <div className='585max:px-6 px-16 flex items-center py-2 justify-between' >
                    <p className='721min:text-base text-center text-base font-extralight text-[#ffffffab]'>© 2025 Fatima Souliman. All rights reserved.</p>
                </div>
            </div>
 
            <div className="absolute z-[-1] bottom-0 left-0 w-80 h-80  bg-[radial-gradient(circle_at_bottom_left,_#4f178777,_transparent_60%)]" >

            </div>
        </footer>
    )
}
