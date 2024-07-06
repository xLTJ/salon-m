import {raleway} from "@/components/fonts";
import Link from "next/link";
import React from "react";

export default function ContactHero() {
    return (
        <div
            className="hero h-[70vh] relative"
            style={{
                backgroundImage: "url(https://res.cloudinary.com/drpcy82zw/image/upload/v1720273937/salon-m-outside_mdjpp1.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-60 bg-black"></div>
            <div className="hero-content text-neutral-content text-center px-12 mt-20">
                <div className="text-white">
                    <h1
                        className={`${raleway.className} mb-5 text-3xl md:text-6xl lg:text-6xl animate-fade-up opacity-0 font-semibold`}
                        style={{animationDelay: "0.15s", animationFillMode: "forwards"}}
                    >
                        Kontakt Os
                    </h1>
                    <p
                        className="mb-5 animate-fade-up opacity-0"
                        style={{animationDelay: "0.25s", animationFillMode: "forwards"}}
                    >Her kan du kontakte os om spørgsmål
                    </p>
                    <div className={"mt-12 flex gap-6 justify-center animate-fade-up opacity-0"}
                         style={{animationDelay: "0.35s", animationFillMode: "forwards"}}>
                        <Link
                            className="btn btn-neutral font-bold px-6"
                            href={'/om-os'}
                        >
                            Om Os
                        </Link>
                        <Link
                            className="btn btn-primary font-bold px-6"
                            href={'/booking'}
                        >
                            Bestil Tid
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}