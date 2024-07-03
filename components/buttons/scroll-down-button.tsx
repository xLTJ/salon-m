'use client'

import {ChevronDownIcon} from "@heroicons/react/20/solid";
import React from "react";

export function ScrollDownButton() {
    const scrollPastHero = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        })
    }

    return (
        <button
            onClick={scrollPastHero}
            className={"hover:text-primary hover:scale-125 duration-500"}
        >
            <ChevronDownIcon height={75}/>
        </button>
    )
}