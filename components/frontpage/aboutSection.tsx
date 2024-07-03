import {raleway} from "@/components/fonts";
import Image from "next/image";

export function AboutSection() {
    return (
        <div className={"flex flex-col items-center"}>
            <div className={"py-32 flex flex-col gap-16 max-w-[80%]"}>
                <h2 className={`${raleway.className} text-6xl font-semibold`}>Velkommen til <span
                    className={"text-primary"}>Salon M</span></h2>
                <div className={"flex gap-10"}>
                    <Image
                        src={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720028491/7A705A76-A2DA-4984-B638-F3AFE05651B1_ac8a4h.jpg"}
                        alt={"Vores Salon"}
                        height={500}
                        width={500}
                        className={"rounded-xl saturate-150 contrast-75"}
                    />
                    <p className={"text-xl"}>Hos Salon M [bla bla bla indsæt ting om salonen her] Lorem ipsum dolor sit
                        amet, consectetur
                        adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam,
                        quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
        </div>
    )
}