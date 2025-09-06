"use client"
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'


export default function ContactInfo() {
    return (
        <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                <div className="pt-6">
                    <p className="721min:text-xl pb-4 text-lg font-medium text-white">
                        Feel free to reach out via WhatsApp or Email.
                    </p>

                    <ul className="flex flex-col gap-3">
                        {/* WhatsApp */}
                        <li className="text-base font-light flex items-center text-[#ffffffab] gap-2">
                            <Image
                                className="opacity-60"
                                width={24}
                                height={24}
                                src="/phone.svg"
                                alt="phone"
                            />
                            <Link
                                href="https://wa.me/963994081932"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition"
                            >
                                +963 994 081 932
                            </Link>
                        </li>

                        {/* Email */}
                        <li className="text-base font-light flex items-center text-[#ffffffab] gap-2">
                            <Image
                                className="opacity-60"
                                width={24}
                                height={24}
                                src="/email.svg"
                                alt="email"
                            />
                            <Link
                                href="mailto:fatima@96souliman@gmail.com"

                                className="hover:text-white transition"
                            >
                                fatima@96souliman@gmail.com
                            </Link>

                        </li>

                        {/* linked in */}
                        <li className="text-base font-light flex items-center text-[#ffffffab] gap-2">
                            <Image
                                className="opacity-60"
                                width={24}
                                height={24}
                                src="/linkedin.svg"
                                alt="location"
                            />
                            <Link
                                href="https://www.linkedin.com/in/fatima-souliman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition"
                            >
                                Fatima Souliman
                            </Link>

                        </li>

                    </ul>
                </div>
            </div>
        </motion.div>

    )
}
