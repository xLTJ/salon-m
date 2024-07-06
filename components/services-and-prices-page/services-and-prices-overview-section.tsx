import Image from "next/image";

export default function ServicesAndPricesOverviewSection() {
    return (
        <section className={"container m-auto my-24"}>
            <div className={"grid grid-cols-2 gap-8"}>
                <div className={"flex flex-col gap-8"}>
                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720037438/Female_Haircut2_xpb7mq.jpg"}
                        serviceTitle={"Dameklip"}
                    >
                        <PriceObject serviceName={"Dameklip"} price={"000"}/>
                        <PriceObject serviceName={"Dameklip med vask og tøring"} price={"399"}/>
                    </ServiceCard>

                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720038108/Child_Haircut2_zmwcjd.jpg"}
                        serviceTitle={"Børneklip - under 12 år"}
                    >
                        <PriceObject serviceName={"Børneklip"} price={"229"}/>
                        <PriceObject serviceName={"Herre med vask og tøring"} price={"320,00"}/>
                    </ServiceCard>

                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720039918/Hair_Treatment_m3nkh3.jpg"}
                        serviceTitle={"Hårkur/Behandlinger"}
                    >
                        <PriceObject serviceName={"Placeholder"} price={"250,00"}/>
                        <PriceObject serviceName={"Placeholder"} price={"320,00"}/>
                    </ServiceCard>


                </div>
                <div className={"flex flex-col gap-8"}>
                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720037082/Male_Haircut_aiivq3.jpg"}
                        serviceTitle={"Herreklip"}
                    >
                        <PriceObject serviceName={"Herreklip"} price={"249"}/>
                        <PriceObject serviceName={"Herre med vask og tøring"} price={"319"}/>
                        <PriceObject serviceName={"Skægtriming"} price={"99"}/>
                    </ServiceCard>

                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720039642/Coloring_Hair_olsuix.jpg"}
                        serviceTitle={"Hårfarve"}
                    >
                        <PriceObject serviceName={"Placeholder"} price={"250,00"}/>
                        <PriceObject serviceName={"Placeholder"} price={"320,00"}/>
                    </ServiceCard>

                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720040075/Eye_Lashes_qeexcq.jpg"}
                        serviceTitle={"Bryn og Vipper"}
                    >
                        <PriceObject serviceName={"Placeholder"} price={"250,00"}/>
                        <PriceObject serviceName={"Placeholder"} price={"320,00"}/>
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
        <div className="card card-side bg-base-200 shadow-xl">
            <figure className={"w-80 relative"}>
                <Image
                    src={imgHref}
                    alt={serviceTitle}
                    fill={true}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-secondary mb-4">{serviceTitle}</h2>
                <div className={"flex flex-col gap-4"}>
                    {children}
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Book Her</button>
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