import AboutPageHero from "@/components/about-page/about-page-hero";
import {StickyScroll} from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import PersonaleSection from "@/components/about-page/personale-section";

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
            <div
                className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Billede
            </div>
        ),
    },
    {
        title: "Din stil, dit look – sammen skaber vi det",
        description:
            "Samarbejde er nøglen til en frisure, du vil elske. Vi lytter til dine ønsker og ideer, og sammen finder vi frem til det look, der får dig til at stråle. Vi tager højde for din ansigtsform, hårtype og livsstil, så du får en frisure, der er nem at style og vedligeholde i hverdagen.",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/linear.webp"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Billede"
                />
            </div>
        ),
    },
    {
        title: "Dit velvære er vores prioritet",
        description:
            "Føl dig tryg og hørt i vores salon. Vi skaber en afslappende og behagelig atmosfære, hvor du kan læne dig tilbage og nyde din behandling. Vi tager os tid til at lytte til dine ønsker og bekymringer, og vi sørger altid for, at du føler dig tryg og godt tilpas under hele processen.",
        content: (
            <div
                className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Billede
            </div>
        ),
    },
    {
        title: "Ærlig vejledning og professionel rådgivning",
        description:
            "Vi siger det, som det er. Vi tror på ærlighed og gennemsigtighed, og vi vil altid give dig vores professionelle mening og vejledning. Vi hjælper dig med at træffe de rigtige valg for dit hår, så du får et resultat, du vil være glad for i lang tid.",
        content: (
            <div
                className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Billede
            </div>
        ),
    },
];