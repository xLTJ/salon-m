import AboutPageHero from "@/components/about-page/about-page-hero";
import {StickyScroll} from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import PersonaleSection from "@/components/about-page/personale-section";
import React from "react";

export default function Page() {
    return (
        <main className={""}>
            <AboutPageHero/>
            <StickyScroll content={content}/>
            <PersonaleSection/>
        </main>
    )
}

const content = [
    {
        title: "Ekspertise til alle aldre og stilarter",
        description:
            "Hos Salon M er alle velkomne. Uanset om du er ung eller gammel, mand eller kvinde, har vi ekspertisen til at skabe den perfekte frisure, der passer til din unikke stil og personlighed. Vi holder os opdateret med de nyeste trends og teknikker, så du altid kan være sikker på et moderne og stilfuldt resultat.",
        content: (
            <div className={"h-full w-full"}>
                <Image
                    src={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720450155/female-haircut-3_wpppi2.jpg"}
                    alt={"Hår der bliver klippet"} fill={true}
                    className={"brightness-75 saturate-150"}
                />
            </div>
        ),
    },
    {
        title: "Din stil, dit look – sammen skaber vi det",
        description:
            "Samarbejde er nøglen til en frisure, du vil elske. Vi lytter til dine ønsker og ideer, og sammen finder vi frem til det look, der får dig til at stråle. Vi tager højde for din ansigtsform, hårtype og livsstil, så du får en frisure, der er nem at style og vedligeholde i hverdagen.",
        content: (
            <div className={"h-full w-full"}>
                <Image
                    src={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720452477/female-haircut-5_d4tl3x.jpg"}
                    alt={"Hår frisure taget bagfra"}
                    fill={true}
                    className={"brightness-75 saturate-150"}
                />
            </div>
        ),
    },
    {
        title: "Dit velvære er vores prioritet",
        description:
            "Føl dig tryg og hørt i vores salon. Vi skaber en afslappende og behagelig atmosfære, hvor du kan læne dig tilbage og nyde din behandling. Vi tager os tid til at lytte til dine ønsker og bekymringer, og vi sørger altid for, at du føler dig tryg og godt tilpas under hele processen.",
        content: (
            <div className={"h-full w-full"}>
                <Image
                    src={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720452662/salon-interior-1_hhtjpb.jpg"}
                    alt={"Billede af frisøren indefra"} fill={true}
                    className={"brightness-75 saturate-[1.25]"}
                />
            </div>
        ),
    },
    {
        title: "Ærlig vejledning og professionel rådgivning",
        description:
            "Vi siger det, som det er. Vi tror på ærlighed og gennemsigtighed, og vi vil altid give dig vores professionelle mening og vejledning. Vi hjælper dig med at træffe de rigtige valg for dit hår, så du får et resultat, du vil være glad for i lang tid.",
        content: (
            <div className={"h-full w-full"}>
                <Image
                    src={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720452662/salon-interior-1_hhtjpb.jpg"}
                    alt={"Hår der bliver klippet"} fill={true}
                    className={"brightness-75 saturate-[1.25]"}
                />
            </div>
        ),
    },
    {
        title: "Bæredygtig skønhed med omtanke",
        description: "Vi tror på skønhed, der ikke går på kompromis med vores planet eller dyrevelfærd. Derfor bruger vi udelukkende veganske og bæredygtige hårprodukter, der er skånsomme mod både dit hår og miljøet. Vi går op i at træffe ansvarlige valg, og vi er stolte af at kunne tilbyde dig en grønnere og mere etisk hårplejeoplevelse.",
        content: (
            <div className={"h-full w-full"}>
                <Image
                    src={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720446313/B%C3%A6redygtige-Produkter_hrzxjm.jpg"}
                    alt={"Veganske og bæredygtige produkter"} fill={true}
                    className={"brightness-75 saturate-150"}
                />
            </div>
        )
    }
];