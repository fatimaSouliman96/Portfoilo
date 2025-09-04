"use client"
import { motion } from "framer-motion";

export default function HeroShapes() {
 
    return (
        <>
            {/*  dotes */}

            <div className=' hidden w-16  lg:grid grid-cols-3 gap-3 absolute top-28 right-20'>
                {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ x: 100, y: -100, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: i / 5 }}
                    >
                        <div className='rounded-full h-4 w-4 bg-muted' />
                    </motion.div>
                ))}
            </div>

            {/* The corner */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            > 
            <div className='lg:block hidden w-10 h-10 border-t-4 rounded border-r-4 border-muted absolute top-24 right-16'></div></motion.div>


            {/* orange organic shape*/}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
            >
                <div className='lg:block hidden absolute bottom-20 left-36 w-16 h-16 bg-muted rounded-[50%_40%_30%_60%/60%_40%_30%_50%] opacity-80'></div>
            </motion.div>


            {/* pink curved shape*/}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className='lg:block hidden absolute top-28 left-36 w-20 h-4 bg-accent rounded-full rotate-45'></div>
            </motion.div>


            {/* pink triangle*/}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <div className='lg:block hidden absolute bottom-24 right-20 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-accent'></div>
            </motion.div>
        </>
    )
}
