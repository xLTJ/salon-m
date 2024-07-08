'use client'
import ReactCompareImage from "react-compare-image";
import Image from "next/image";
import {raleway} from "@/components/fonts";
import Link from "next/link";

export default function GallerySection() {
    return (
        <section className={"flex flex-col items-center container m-auto "}>
            <div className={"py-16 md:py-32 flex flex-col gap-8 max-w-[800px] mx-12 md:mx-0"}>
                <h2 className={`${raleway.className} text-5xl md:text-6xl font-semibold`}>Galleri</h2>
                <p className={"text-xl"}>
                    Se vores galleri for flere eksempler på vores arbejde og find inspiration til din næste
                    frisure. Vi elsker at skabe unikke looks, der fremhæver din personlighed og stil.
                </p>
                <div className={"flex flex-col gap-10 items-center"}>
                    <div className={"rounded-2xl w-full md:w-[600px] overflow-hidden"}>
                        <ReactCompareImage
                            leftImage={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720453454/female-hair-comparison-2a_pmjqwc.jpg"}
                            rightImage={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720453473/female-hair-comparison-2b_e9ppcn.jpg"}
                        />
                    </div>
                </div>
                <Link
                    className={"btn btn-outline btn-secondary border-2 text-xl"}
                    href={'/galleri'}
                >Se mere
                </Link>
            </div>
        </section>
    )
}
