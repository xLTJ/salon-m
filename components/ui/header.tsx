'use client'

import {useScroll, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {Bars3Icon} from "@heroicons/react/20/solid";

export function Header() {
    const [hideHeader, setHideHeader] = useState(true)
    const {scrollYProgress} = useScroll()

    const handleScroll = () => {
        setHideHeader(window.scrollY < window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`navbar z-50 bg-base-300 fixed top-0 bg-opacity-100 text-black duration-500 transition-all ease-in-out ${hideHeader && 'opacity-0 translate-y-[-5rem]'}`}
        >
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">LOGO</a>
            </div>
            <nav className="flex hidden lg:block">
                <ul className="menu menu-horizontal px-1 text-2xl gap-10">
                    <li><a>Forside</a></li>
                    <li><a>Priser</a></li>
                    <li><a>Om os</a></li>
                    <li><a>Kontakt</a></li>
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