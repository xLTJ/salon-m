import Image from "next/image";
import {Hero} from "@/components/frontpage/hero";
import {TailwindcssButtons} from "@/components/ui/buttons";
import {GhostHeader} from "@/components/frontpage/ghost-header";
import Link from "next/link";
import {lato} from "@/components/fonts";
import {AboutSection} from "@/components/frontpage/sections/about-section";
import {ServicesSection} from "@/components/frontpage/sections/services-section";
import ReactCompareImage from 'react-compare-image';
import GallerySection from "@/components/frontpage/sections/gallery-section";
import PopupModal from "@/components/ui/popup-modal";

export default function Home() {
    return (
        <main className={`${lato.className}`}>

            <GhostHeader/>
            <Hero/>
            <div className={"text-center"}>
                <AboutSection/>
                <ServicesSection/>
                <GallerySection/>
                <PopupModal/>
            </div>
        </main>
    );
}
