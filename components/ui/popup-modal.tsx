'use client'

import {useEffect, useState} from "react";
import Image from "next/image";
import {raleway} from "@/components/fonts";
import Link from "next/link";

export default function PopupModal() {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const isFirstVisit = !sessionStorage.getItem('hasSeenCampaign');
        if (isFirstVisit) {
            setShowModal(true)
            sessionStorage.setItem('hasSeenCampaign', 'true')
        }
    }, []);

    return (
        <dialog id="first-visit-modal" className={`modal ${showModal ? 'modal-open' : ''}`}>
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => setShowModal(false)}>✕
                </button>
                <h3 className={`font-bold text-3xl sm:text-4xl pb-8 pt-2 ${raleway.className}`}>Efterårstilbud!</h3>
                <div className={"w-full h-52 sm:h-80 relative rounded-xl overflow-hidden"}>
                    <Image
                        src={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720792977/Hair-before-after_w3lbus.jpg"}
                        alt={"Før/efter billede af hår"}
                        width={'500'}
                        height={'500'}
                        className={"brightness-[0.90] saturate-[1.25]"}
                    />
                </div>
                <p className="pt-4 text-lg sm:text-xl">15% rabat ved alle behandlinger. Gælder ikke behandlinger under 300 kr.</p>
                <p className={"pt-2 font-bold sm:text-lg"}>Bemærk <span className={"text-secondary"}>Rabatten kan ikke kombineres med andre rabataftaler.</span> (Rabatten
                    gælder kun
                    ved online booking.)</p>
                <div className="modal-action">
                    <Link href={'/booking'} className={'btn btn-block btn-primary'}>Book Nu</Link>
                </div>
            </form>
        </dialog>
    )
}