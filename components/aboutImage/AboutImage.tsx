
"use client"
import Image from 'next/image'
import { motion } from "framer-motion";

export default function AboutImage() {
    return (
        <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
                <Image
                    src="/hero.png"
                    alt="Fatima Souliman"
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full object-cover"
                />
            </div>
        </motion.div>

    )
}
