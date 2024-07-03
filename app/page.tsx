import Image from "next/image";
import {Hero} from "@/components/frontpage/hero";
import {TailwindcssButtons} from "@/components/ui/buttons";
import {GhostHeader} from "@/components/frontpage/ghost-header";
import Link from "next/link";
import {lato} from "@/components/fonts";
import {AboutSection} from "@/components/frontpage/sections/about-section";
import {ServicesSection} from "@/components/frontpage/sections/services-section";

export default function Home() {
    return (
        <main className={`${lato.className}`}>
            <div className="drawer drawer-end">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                {/*Page Content*/}

                <div className="drawer-content">
                    <GhostHeader/>
                    <Hero/>
                    <div className={"text-center"}>
                        <AboutSection/>
                        <ServicesSection/>
                    </div>
                </div>

                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
