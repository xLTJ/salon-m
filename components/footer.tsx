import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer>
            <div className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <Image
                        src={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720139737/SalonM-Logo-No-Background_qkwpjc.svg"}
                        alt={"logo"}
                        width={125}
                        height={125}
                    />
                    <p>
                        Din personlige friør i Glostrup
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Kontakt Info</h6>
                    <a className="link link-hover">+45 24 47 88 99</a>
                    <a className="link link-hover">maijimmischram@gmail.com</a>
                    <a className="link link-hover">Hovedvejen 116, 2600 Glostrup</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Genveje</h6>
                    <Link className="link link-hover" href={'/behandlinger-og-priser'}>Behandlinger & Priser</Link>
                    <Link className="link link-hover" href={'/om-os'}>Om os</Link>
                    <Link className="link link-hover" href={'/kontakt'}>Kontakt</Link>
                    <Link className="link link-hover" href={'/booking'}>Booking</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Åbningstider</h6>
                    <span className="">Mandag: 12 - 18</span>
                    <span className="">Tir - Fre: 9 - 18</span>
                    <span className="">Lørdag: 9 - 14</span>
                    <span className="">Søndag: Efter aftale</span>
                </nav>
            </div>
            <div className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} Salon M. All right reserved.</p>
                    {/*Made with ♥ by*/}
                    {/*<span*/}
                    {/*    className={"bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700"}> @Lucilorate</span>*/}
                </aside>
            </div>
        </footer>
    )
}