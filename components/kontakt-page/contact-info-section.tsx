import {raleway} from "@/components/fonts";
import Image from "next/image";
import {GlareCard} from "@/components/ui/glare-card";
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/20/solid'

export default function ContactInfoSection() {
    return (
        <section className={"container m-auto mb-24 flex flex-col gap-10 items-center"}>
            <div className={"pt-12 pb-2 md:pt-24 md:pb-12 text-center"}>
                <h2 className={`${raleway.className} text-4xl md:text-6xl font-semibold`}>Kontakt Information</h2>
            </div>
            <div
                className={"grid grid-cols-1 xl:grid-cols-3 xl:gap-10 gap-4 w-[90%] lg:w-[70%] xl:w-auto items-center"}>
                <GlareCard className="flex flex-col items-center justify-center">
                    <PhoneIcon className={"w-16 h-16 text-white"}/>
                    <p className="text-white font-bold text-xl mt-4">+45 24 47 88 99</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <EnvelopeIcon className={"w-16 h-16 text-white"}/>
                    <p className="text-white font-bold text-xl mt-4">maijimmischram@gmail.com</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <MapPinIcon className={"w-16 h-16 text-white"}/>
                    <p className="text-white font-bold text-xl mt-4 text-center">Hovedvejen 116, <br/> 2600 Glostrup</p>
                </GlareCard>
            </div>
        </section>
    )
}