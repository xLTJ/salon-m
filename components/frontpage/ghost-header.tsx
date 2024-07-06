'use client'

import {Bars3Icon} from '@heroicons/react/20/solid'
import {motion} from "framer-motion";
import {useState} from "react";
import Link from "next/link";
import {raleway} from "@/components/fonts";
import Image from "next/image";

export function GhostHeader() {
    return (
        <header
            className={`navbar bg-base-300 absolute top-0 bg-opacity-0 text-white z-10`}
        >
            <div className="navbar-start">
            </div>
            <div className="navbar-center hidden lg:block">
                <ul
                    className="menu-horizontal px-1 text-3xl gap-16 animate-fade-up opacity-0"
                    style={{animationFillMode: "forwards"}}
                >
                    <NavItem linkText="Om os" linkHref="/om-os"/>
                    <NavItem linkText="Behandlinger & Priser" linkHref="/behandlinger-og-priser"/>
                    <NavItem linkText="Kontakt" linkHref="/kontakt"/>
                </ul>
            </div>
            <div className="navbar-end py-3">
                <div className={"relative flex mr-6"}>
                    <div className={"absolute z-0 h-10 w-10"}>
                        <Bars3Icon/>
                    </div>
                    <label htmlFor="my-drawer"
                           className="btn btn-ghost drawer-button z-20 w-10 hover:opacity-0 opacity-0"></label>
                </div>
            </div>
        </header>
    )
}

const NavItem = ({linkText, linkHref}: { linkText: string; linkHref: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={""}
        >
            <Link href={linkHref}
                  className={`relative py-2 px-4 ${raleway.className} font-semibold`}>
                {linkText}
                <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-secondary rounded-xl"
                    initial={{width: '0%', left: '50%'}}
                    animate={isHovered ? {width: '100%', left: '0%'} : {width: '0%', left: '50%'}}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                />
            </Link>
        </li>
    );
};