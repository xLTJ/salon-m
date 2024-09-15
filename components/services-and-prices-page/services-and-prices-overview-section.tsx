import Image from "next/image";
import Link from "next/link";
import {list} from "postcss";
import {generateKey} from "node:crypto";

export default function ServicesAndPricesOverviewSection() {
    return (
        <section className={"container m-auto my-12 flex justify-center"}>
            <div className={"grid grid-cols-1 xl:grid-cols-2 gap-8 flex-1 max-w-[82rem] mx-8 sm:mx-0"}>
                <div className={"flex flex-col gap-8"}>
                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720037438/Female_Haircut2_xpb7mq.jpg"}
                        serviceTitle={"Dameklip"}
                    >
                        <PriceEntries services={[
                            {serviceName: "Dameklip med vask og tøring", price: "399"},
                            {serviceName: "Tillæg for tykt hår", price: "100"},
                        ]}/>
                    </ServiceCard>

                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720037082/Male_Haircut_aiivq3.jpg"}
                        serviceTitle={"Herreklip"}
                    >
                        <PriceEntries services={[
                            {serviceName: "Herreklip", price: "249"},
                            {serviceName: "Herreklip med vask og tøring", price: "319"},
                            {serviceName: "Maskineklip", price: "200"},
                            {serviceName: "Triming af skæg", price: "100"},
                        ]}/>
                    </ServiceCard>

                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720038108/Child_Haircut2_zmwcjd.jpg"}
                        serviceTitle={"Børneklip - under 12 år"}
                    >
                        <PriceEntries services={[
                            {serviceName: "Børneklip", price: "229"},
                        ]}/>
                    </ServiceCard>

                </div>
                <div className={"flex flex-col gap-8"}>
                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720039642/Coloring_Hair_olsuix.jpg"}
                        serviceTitle={"Hårfarve"}
                    >
                        <PriceEntries services={[
                            {serviceName: "Helfarve", price: "650 - 1200"},
                            {serviceName: "Striber", price: "799 - 1400`"},
                            {serviceName: "Bundfarve (op til 3 cm)", price: "499"},
                            {serviceName: "Babylights", price: "1365 - 1865"},
                            {serviceName: "Balayage", price: "1875 - 2175"},
                            {serviceName: "Reflekser", price: "1265 - 1665"},
                            {serviceName: "Toning", price: "400 - 800"},
                        ]}/>
                    </ServiceCard>

                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720039918/Hair_Treatment_m3nkh3.jpg"}
                        serviceTitle={"Hårkur/Behandlinger"}
                    >
                        <PriceEntries services={[
                            {serviceName: "Hårkur", price: "499"},
                            {serviceName: "Hårkur sammen med anden behandling", price: "275"},
                        ]}/>
                    </ServiceCard>

                    <ServiceCard
                        imgHref={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720040075/Eye_Lashes_qeexcq.jpg"}
                        serviceTitle={"Bryn og Vipper"}
                    >
                        <PriceEntries services={[
                            {serviceName: "Retning af øjenbryn", price: "115"},
                            {serviceName: "Farvning af vipper", price: "100"},
                            {serviceName: "Farvning af øjenbryn", price: "100"},
                        ]}/>
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

type ServiceEntry = {
    serviceName: string;
    price: string;
}

const PriceEntries = ({services}: {
    services: ServiceEntry[];
}) => {
    return (
        <>
            {services.map(service => {
                return (
                    <div className={""} key={service.serviceName + service.price}>
                        <h3 className={"text-lg font-bold"}>{service.serviceName}</h3>
                        <p>{service.price} kr.</p>
                    </div>
                )
            })}
        </>
    )
}