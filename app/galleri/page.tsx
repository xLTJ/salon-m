import GallerySection from "@/components/frontpage/sections/gallery-section";
import {raleway} from "@/components/fonts";
import Gallery from "@/components/gallery/image-gallery";
import {Suspense} from "react";

export default function Page() {
    return (
        <main>
            <div className={"h-24"}></div>
            <h1 className={`${raleway.className} my-8 text-6xl md:text-6xl lg:text-6xl font-semibold text-center`}>Galleri</h1>

            <Gallery/>

        </main>
    )
}