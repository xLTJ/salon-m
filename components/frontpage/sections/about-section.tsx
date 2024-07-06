import {raleway} from "@/components/fonts";
import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
    return (
        <section className={"flex flex-col items-center container m-auto "}>
            <div className={"py-32 flex flex-col gap-16 max-w-[90%] lg:max-w-[80%]"}>
                <h2 className={`${raleway.className} text-6xl font-semibold`}>Velkommen til <span
                    className={"text-primary"}>Salon M</span></h2>
                <div className={"flex gap-0 lg:gap-10"}>
                    <div>
                        <Image
                            src={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720186194/7A705A76-A2DA-4984-B638-F3AFE05651B1_ac8a4h.jpg"}
                            alt={"Vores Salon"}
                            height={500}
                            width={500}
                            className={"rounded-xl saturate-150 contrast-75 hidden lg:block"}
                        />
                    </div>
                    <div className={"flex flex-col gap-8 w-[100%] lg:w-[75%]"}>
                        <h3 className={`${raleway.className} text-3xl font-bold`}>Din personlige frisør i Glostrup</h3>
                        <p className={"text-xl"}>
                            Vi tror på, at en god frisure handler om mere end bare at klippe hår – det handler om at
                            skabe en følelse af selvtillid og velvære. I vores varme og imødekommende salon kan du være
                            dig selv og nyde en personlig behandling, der er skræddersyet til dine behov. Vi er stolte
                            af at være en del af lokalsamfundet og betjene vores kunder med ekspertise og omhu
                        </p>
                        <Link
                            className={"btn btn-outline btn-secondary border-2 text-xl"}
                            href={'/om-os'}
                        >Læs mere
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}