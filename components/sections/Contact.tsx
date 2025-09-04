import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
    return (
        <div className="w-full pb-20 pt-14">
            <div className='w-1/2 h-[1px] bg-secondary mx-auto mb-8 shadow-[-3px_5px_20px_0px_#ffffff]' ></div>
            <p className="text-white text-4xl font-extrabold leading-[4rem]">
                        Contact me
                    </p>
            <div className='flex w-full lg:flex-nowrap md:flex-nowrap flex-wrap justify-between items-center' >
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
                <div className="w-full lg:w-[40%] h-[400px] relative lg:ml-16">
                    <Image
                        src={"/Social media-amico.svg"}
                        fill
                        style={{ objectFit: 'contain' }}
                        unoptimized={true}
                        alt="Fatima Souliman"
                    />
                </div>
            </div>
        </div>
    )
}

