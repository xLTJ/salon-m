import ServicesAndPricesHero from "@/components/services-and-prices-page/services-and-prices-hero";
import ServicesAndPricesOverviewSection
    from "@/components/services-and-prices-page/services-and-prices-overview-section";

export default function Page() {
    return (
        <main>
            <ServicesAndPricesHero/>
            <div className={"container mx-auto px-28 my-12"}>
                <div role="alert" className="alert shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-info h-6 w-6 shrink-0">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Alle behandlinger kan fås med eller uden tidsbestilling</span>
                </div>
            </div>
            <ServicesAndPricesOverviewSection/>
        </main>
    )
}