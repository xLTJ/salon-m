import Image from "next/image";
import Link from "next/link";

export default function ServicesAndPricesOverviewSection() {
    return (
        <section className={"container m-auto my-24 flex justify-center"}>
            <div className={"grid grid-cols-1 xl:grid-cols-2 gap-8 flex-1 max-w-[82rem] mx-8 sm:mx-0"}>
                <div className={"flex flex-col gap-8"}>
                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720037438/Female_Haircut2_xpb7mq.jpg"}
                        serviceTitle={"Dameklip"}
                    >
                        <PriceObject serviceName={"Dameklip"} price={"000"}/>
                        <PriceObject serviceName={"Dameklip med vask og tøring"} price={"399"}/>
                    </ServiceCard>

                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720037082/Male_Haircut_aiivq3.jpg"}
                        serviceTitle={"Herreklip"}
                    >
                        <PriceObject serviceName={"Herreklip"} price={"249"}/>
                        <PriceObject serviceName={"Herre med vask og tøring"} price={"319"}/>
                        <PriceObject serviceName={"Skægtriming"} price={"99"}/>
                    </ServiceCard>

                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720038108/Child_Haircut2_zmwcjd.jpg"}
                        serviceTitle={"Børneklip - under 12 år"}
                    >
                        <PriceObject serviceName={"Børneklip"} price={"229"}/>
                        <PriceObject serviceName={"Herre med vask og tøring"} price={"320,00"}/>
                    </ServiceCard>

                </div>
                <div className={"flex flex-col gap-8"}>
                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720039642/Coloring_Hair_olsuix.jpg"}
                        serviceTitle={"Hårfarve"}
                    >
                        <PriceObject serviceName={"Placeholder"} price={"250,00"}/>
                        <PriceObject serviceName={"Placeholder"} price={"320,00"}/>
                    </ServiceCard>

                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720039918/Hair_Treatment_m3nkh3.jpg"}
                        serviceTitle={"Hårkur/Behandlinger"}
                    >
                        <PriceObject serviceName={"Placeholder"} price={"250,00"}/>
                        <PriceObject serviceName={"Placeholder"} price={"320,00"}/>
                    </ServiceCard>

                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720040075/Eye_Lashes_qeexcq.jpg"}
                        serviceTitle={"Bryn og Vipper"}
                    >
                        <PriceObject serviceName={"Retning af øjenbryn"} price={"115"}/>
                        <PriceObject serviceName={"Farvning af vipper"} price={"100"}/>
                        <PriceObject serviceName={"Farvning af øjenbryn"} price={"100"}/>
                    </ServiceCard>
                </div>
            </div>
        </section>
    )
}


const ServiceCard = ({imgHref, serviceTitle, children}: {
    imgHref: string;
    serviceTitle: string;
    children: React.ReactNode;
}) => {
    return (
        <div className="card bg-base-200 shadow-xl group">
            <figure className={"relative h-80 overflow-hidden"}>
                <Image
                    src={imgHref}
                    alt={serviceTitle}
                    height={500}
                    width={500}
                    className={"object-cover object-center absolute inset-0 h-full w-full group-hover:scale-110 duration-1000"}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-secondary mb-4">{serviceTitle}</h2>
                <div className={"flex flex-col gap-4"}>
                    {children}
                </div>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" href={'/booking'}>Book Her</Link>
                </div>
            </div>
        </div>
    )
}

const PriceObject = ({serviceName, price}: {
    serviceName: string;
    price: string;
}) => {
    return (
        <div className={""}>
            <h3 className={"text-lg font-bold"}>{serviceName}</h3>
            <p>{price} kr.</p>
        </div>
    )
}