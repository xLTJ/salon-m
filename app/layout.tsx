import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"
import Link from "next/link";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Frisør M",
    description: "Din personlige frisør i Glostrup",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={"scrollbar-thin"}>
        <body className={inter.className}>
        <div className="drawer drawer-end">
            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
            {/*Page Content*/}

            <div className="drawer-content">
                <Header/>
                {children}
                <Analytics/>
                <SpeedInsights/>
                <Footer/>
            </div>

            <div className="drawer-side z-50">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-lg">
                    <li className={"flex flex-row-reverse"}>
                        <div className={"relative w-[40px] p-0"}>
                            <div className={"absolute z-0 h-10 w-10 p-0"}>
                                <XMarkIcon/>
                            </div>
                            <label htmlFor="my-drawer"
                                   className="btn btn-ghost drawer-button z-20 w-10 hover:opacity-0 opacity-0 p-0"></label>
                        </div>
                    </li>
                    <li><Link href={'/'}>Forside</Link></li>
                    <li><Link href={'/behandlinger-og-priser'}>Behandlinger & Priser</Link></li>
                    <li><Link href={'/om-os'}>Om Os</Link></li>
                    <li><Link href={'/kontakt'}>Kontakt</Link></li>
                    <div className="divider"></div>
                    <li><Link href={'/booking'} className={"bg-primary text-primary-content"}>Bestil
                        Tid</Link>
                    </li>
                </ul>
            </div>
        </div>
        </body>
        </html>
    );
}
