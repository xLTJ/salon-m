'use client'

import {useScroll, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {Bars3Icon} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {raleway} from "@/components/fonts";
import {clsx} from "clsx";

export function Header() {
    const [hideHeader, setHideHeader] = useState(true)
    const pathname = usePathname()

    const handleScroll = () => {
        pathname === '/' ? setHideHeader(window.scrollY < window.innerHeight) : setHideHeader(false)
    }

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [pathname])

    return (
        <header
            className={`navbar z-50 bg-base-300 fixed top-0 bg-opacity-100 text-black duration-500 transition-all ease-in-out ${hideHeader && 'opacity-0 translate-y-[-5rem]'}`}
        >
            <div className="flex-1">
                <Link href={'/'} className={"btn btn-ghost"}>
                    <Image
                        src={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720139965/SalonM-Logo-Notext-Nobackground_ngwsb0.svg"}
                        alt={"logo"}
                        width={75}
                        height={75}
                    />
                </Link>
            </div>
            <nav className="flex hidden lg:block">
                <ul className="menu-horizontal px-1 text-2xl gap-10">
                    {/*<li><Link href={'/'}>Forside</Link></li>*/}
                    {/*<li><Link href={'/'}>Services</Link></li>*/}
                    {/*<li><Link href={'/'}>Priser</Link></li>*/}
                    {/*<li><Link href={'/om-os'}>Om os</Link></li>*/}
                    {/*<li><Link href={'/'}>Kontakt</Link></li>*/}
                    <NavItem linkText="Forside" linkHref="/"/>
                    <NavItem linkText="Behandlinger & Priser" linkHref="/behandlinger-og-priser"/>
                    <NavItem linkText="Om os" linkHref="/om-os"/>
                    <NavItem linkText="Kontakt" linkHref="/kontakt"/>
                </ul>
            </nav>
            <div className={'mx-10 py-2 hidden md:block'}>
                <a className={"btn btn-primary text-xl"}>Bestil Tid</a>
            </div>
            <div className={"relative flex mr-6"}>
                <div className={"absolute z-0 h-10 w-10"}>
                    <Bars3Icon/>
                </div>
                <label htmlFor="my-drawer"
                       className="btn btn-ghost drawer-button z-20 w-10 hover:opacity-0 opacity-0"></label>
            </div>
        </header>
    )
}

const NavItem = ({linkText, linkHref}: { linkText: string; linkHref: string }) => {
    const [isHovered, setIsHovered] = useState(false);
    const pathName = usePathname();

    useEffect(() => {
        pathName === linkHref ? setIsHovered(true) : setIsHovered(false)
    }, [pathName, linkHref]);

    return (
        <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(pathName === linkHref)}
            className={""}
        >
            <Link href={linkHref}
                  className={clsx(
                      `relative py-2 px-4 ${raleway.className} font-semibold rounded-t-md hover:bg-black/10 duration-200`,
                  )}>
                {linkText}
                <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-xl"
                    initial={{width: '0%', left: '50%'}}
                    animate={isHovered ? {width: '100%', left: '0%'} : {width: '0%', left: '50%'}}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                />
            </Link>
        </li>
    );
};