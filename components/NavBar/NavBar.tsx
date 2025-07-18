"use client";

import { usePathname } from "next/navigation";
import { navLinks } from "@/constant/navLinks";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);

    // Track scroll to change styles
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 20); // threshold to trigger change
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    return (
        <nav
            className={` transition-all duration-300 max-w-full w-full fixed top-0 px-12 z-40 flex items-center justify-between
           bg-black`}
        >
            <div className="absolute z-50 top-0 right-0 w-80 h-80  bg-[radial-gradient(circle_at_top_right,_#4f178777,_transparent_60%)]" >

            </div>
            <div className="relative">
                <Image
                    src={scrolled ? "/fatima.png" : "/fatima.png"}
                    width={150}
                    height={100}
                    style={{ objectFit: 'cover' }}
                    unoptimized={true}
                    alt="Fatima Souliman"
                />
            </div>

            {/* Desktop Menu */}
            <ul className="gap-6 sm:hidden hidden lg:flex md:hidden">
                {navLinks.map((ele) => {
                    const isActive = pathname === ele.link;
                    return (
                        <li
                            key={ele.title}
                            className={`text-base border-b-2 transition-all duration-200 
                            ${scrolled ? ` text-white ${isActive ? "border-white font-bold" : "font-medium border-transparent hover:border-white"}` : ` text-white ${isActive ? "border-white font-bold" : "font-medium border-transparent hover:border-white"}`}
                          `}
                        >
                            <Link href={ele.link}>{ele.title}</Link>
                        </li>
                    );
                })}
            </ul>

            {/* Mobile Menu */}
            {open && (
                <ul
                    ref={menuRef}
                    className={`absolute top-[7rem] left-0 flex flex-col items-center w-full gap-4 lg:hidden md:flex
                    ${scrolled ? "bg-[#4F1787]" : "bg-primary"} p-3`}
                >
                    {navLinks.map((ele) => {
                        const isActive = pathname === ele.link;
                        return (
                            <li
                                key={ele.title}
                                className={`text-lg w-fit transition-all duration-200 
                                ${scrolled ? "text-white" : "text-white"} 
                                ${isActive ? "border-b-2 border-white font-bold" : "font-medium hover:border-b-2 hover:border-white"}`}
                                onClick={() => setOpen(false)}
                            >
                                <Link href={ele.link}>{ele.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            )}

            {/* Mobile Menu Button */}
            <div className="flex gap-2 items-center">
                <button
                    onClick={() => setOpen(!open)}
                    className="sm:flex flex md:flex lg:hidden flex-col gap-2 w-8"
                >
                    <span className={`block w-full h-1 transition-all duration-300 ${scrolled ? "bg-[#4F1787]" : "bg-white"}`}></span>
                    <span className={`block w-full h-1 transition-all duration-300 ${scrolled ? "bg-[#4F1787]" : "bg-white"}`}></span>
                    <span className={`block w-full h-1 transition-all duration-300 ${scrolled ? "bg-[#4F1787]" : "bg-white"}`}></span>
                </button>
            </div>
        </nav>
    );
}

