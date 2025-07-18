import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ContactPage() {
  return (
    <section className="w-full bg-black pt-20 pb-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-purple-400 text-sm uppercase tracking-wide mb-2">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Me
          </h1>
          <p className="text-lg text-gray-300 mb-6 max-w-md">
            Feel free to reach out via WhatsApp, LinkedIn or Email. I’ll get back to you as soon as I can!
          </p>

          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-3 text-gray-300">
              <Image src="/phone.svg" width={24} height={24} alt="Phone" />
              <Link
                href="https://wa.me/963994081932"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                +963 994 081 932
              </Link>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Image src="/email.svg" width={24} height={24} alt="Email" />
              <Link
                href="mailto:fatima96souliman@gmail.com"
                className="hover:text-white transition"
              >
                fatima96souliman@gmail.com
              </Link>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <Image src="/linkedin.svg" width={24} height={24} alt="LinkedIn" />
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

        {/* Right Image */}
        <div className="flex-1 relative h-[300px] sm:h-[400px] w-full max-w-md">
          <Image
            src="/Social media-amico.svg"
            alt="Contact Illustration"
            fill
            style={{ objectFit: 'contain' }}
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
