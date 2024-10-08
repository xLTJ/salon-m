import React from "react";
import {allison, poppins, raleway, tilt_neon} from "@/components/fonts";
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import {ScrollDownButton} from "@/components/buttons/scroll-down-button";
import Link from "next/link";

export function Hero() {
    return (
        <div
            className="hero h-screen relative"
            style={{
                backgroundImage: "url(https://res.cloudinary.com/drpcy82zw/image/upload/v1720028577/oladimeji-odunsi-n5aE6hOY6do-unsplash_yxu4pw.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60 bg-black"></div>
            <div className="hero-content text-neutral-content text-center px-12">
                <div className="text-white">
                    <h1
                        className={`${raleway.className} text-4xl md:text-6xl lg:text-8xl animate-fade-up opacity-0 font-bold mb-5`}
                        style={{animationDelay: "0.15s", animationFillMode: "forwards"}}
                    >
                        Frisør M
                    </h1>
                    <h2
                        className={`${raleway.className} mb-5 text-3xl md:text-5xl lg:text-7xl animate-fade-up opacity-0 font-semibold`}
                        style={{animationDelay: "0.15s", animationFillMode: "forwards"}}
                    >
                        Din personlige frisør i Glostrup
                    </h2>
                    <p
                        className="mb-5 animate-fade-up opacity-0"
                        style={{animationDelay: "0.25s", animationFillMode: "forwards"}}
                    >Forkæl dig selv med en afslappende og professionel hårbehandling.
                    </p>
                    <Link
                        className="border-0 relative inline-flex overflow-hidden rounded-full p-[1px] mt-6 group animate-fade-up opacity-0"
                        style={{animationDelay: "0.35s", animationFillMode: "forwards"}}
                        href={'/booking'}
                    >
                        <span
                            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#476186_0%,#f87171_50%,#476186_100%)]"/>
                        <span
                            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-12 py-4 text-xl font-bold text-white backdrop-blur-3xl group-active:text-lg duration-200 group-hover:scale-y-95 group-hover:scale-x-[0.98] ease-in-out z-10">
                            Book online
                        </span>
                    </Link>
                </div>
            </div>
            <div className={"flex justify-center mt-10 absolute bottom-10 text-white"}>
                <ScrollDownButton/>
            </div>
        </div>
    );
}
