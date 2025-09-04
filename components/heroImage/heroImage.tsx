"use client"

import Image from 'next/image'
import { motion } from "framer-motion";

export default function HeroImage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='lg:w-[70%] md:w-[70%] w-full h-[500px] relative lg:ml-16 md:ml-16' >
                {/* الصورة */}
                <Image
                    src={"/hero.png"}
                    fill
                    style={{ objectFit: 'contain' }}
                    className='lg:pt-20 lg:pl-40 sm:pt-0 sm:pl-0'
                    unoptimized={true}
                    alt="Fatima Souliman"
                />
            </div>
        </motion.div>
    )
}
