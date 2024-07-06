import {raleway} from "@/components/fonts";
import Image from "next/image";
import Link from "next/link";

export default function PersonaleSection() {
    return (
        <section className={"container m-auto mb-24 flex flex-col items-center"}>
            <div className={"pt-12 pb-2 md:pt-24 pb-12 text-center"}>
                <h2 className={`${raleway.className} text-4xl md:text-6xl font-bold`}>Mød Vores Frisør</h2>
            </div>
            <div className={"flex flex-col items-center lg:flex-row justify-center gap-10 w-[75%]"}>
                <div className={"avatar"}>
                    <div className={"w-96 rounded-full"}>
                        <Image
                            src={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720270877/Mai-Portrait_sirxvw.jpg"}
                            alt={"Frisør Mai"}
                            height={300}
                            width={300}
                            className={"saturate-150 contrast-75 rounded-full"}
                        />
                    </div>
                </div>
                <div className={"flex flex-col gap-8 w-[100%] lg:w-[75%]"}>
                    <h3 className={`${raleway.className} text-3xl font-bold`}>Frisør Mai</h3>
                    <p className={"text-xl"}>
                        Mød Mai, vores passionerede og imødekommende frisør, der altid har et smil på læben og en saks i
                        hånden. Med en smittende energi og en ægte kærlighed til sit fag, stræber Mai efter at gøre hver
                        eneste klipning til en personlig og positiv oplevelse. Hun er en mester i at lytte til dine
                        ønsker og oversætte dem til en frisure, der fremhæver din unikke stil og personlighed. Og mens
                        hun tryller med saksen, kan du nyde en hyggelig snak om alt mellem himmel og jord – Mai er
                        nemlig kendt for sin gode samtaleevne og evne til at få sine kunder til at føle sig godt tilpas.
                    </p>
                </div>
            </div>
        </section>
    )
}