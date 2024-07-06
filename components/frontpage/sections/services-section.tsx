'use client'

import {raleway} from "@/components/fonts";
import {HoverEffect} from "@/components/ui/card-hover-effect";

export function ServicesSection() {
    return (
        <section className={"bg-slate-400/50"}>
            <div className={"pt-12 pb-2 md:pt-24 md:pb-12"}>
                <h2 className={`${raleway.className} text-4xl md:text-6xl font-semibold`}>Hvad tilbyder vi?</h2>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects}/>
            </div>
        </section>
    )
}

export const projects = [
    {
        title: "Dameklip",
        link: "/behandlinger-og-priser",
        image_url: "https://res.cloudinary.com/drpcy82zw/image/upload/v1720037438/Female_Haircut2_xpb7mq.jpg",
    },
    {
        title: "Herreklip",
        link: "/behandlinger-og-priser",
        image_url: "https://res.cloudinary.com/drpcy82zw/image/upload/v1720037082/Male_Haircut_aiivq3.jpg",
    },
    {
        title: "Børneklip",
        link: "/behandlinger-og-priser",
        image_url: "https://res.cloudinary.com/drpcy82zw/image/upload/v1720038108/Child_Haircut2_zmwcjd.jpg",
    },
    {
        title: "Hårfarve",
        link: "/behandlinger-og-priser",
        image_url: "https://res.cloudinary.com/drpcy82zw/image/upload/v1720039642/Coloring_Hair_olsuix.jpg",
    },
    {
        title: "Hårkur/Behandlinger",
        link: "/behandlinger-og-priser",
        image_url: "https://res.cloudinary.com/drpcy82zw/image/upload/v1720039918/Hair_Treatment_m3nkh3.jpg",
    },
    {
        title: "Bryn og Vipper",
        link: "/behandlinger-og-priser",
        image_url: "https://res.cloudinary.com/drpcy82zw/image/upload/v1720040075/Eye_Lashes_qeexcq.jpg",
    },
];