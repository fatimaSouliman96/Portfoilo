"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageContact() {
    return (
        <div className="w-full lg:w-[40%]" >
            <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        > <div className="w-full h-[400px] relative lg:ml-16">
                <Image
                    src={"/Social media-amico.svg"}
                    fill
                    style={{ objectFit: 'contain' }}
                    unoptimized={true}
                    alt="Fatima Souliman"
                />
            </div> </motion.div>

        </div>
    )
}
