'use client'

import {useScroll, motion} from "framer-motion";
import {useEffect, useState} from "react";

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
            <nav className="flex">
                <ul className="menu menu-horizontal px-1 text-2xl gap-10">
                    <li><a>Forside</a></li>
                    <li><a>Priser</a></li>
                    <li><a>Om os</a></li>
                    <li><a>Kontakt</a></li>
                    <li className={"btn btn-primary text-xl"}><a>Bestil Tid</a></li>
                </ul>
            </nav>
        </header>
    )
}