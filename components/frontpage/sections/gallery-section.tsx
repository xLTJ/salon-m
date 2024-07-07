'use client'
import ReactCompareImage from "react-compare-image";

export default function GallerySection() {
    return (
        <section className={"container m-auto"}>
            <div className={"py-24"}>
                <div className={"rounded-2xl overflow-hidden"}>
                    <ReactCompareImage
                        leftImage={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720037438/Female_Haircut2_xpb7mq.jpg"}
                        rightImage={"https://res.cloudinary.com/drpcy82zw/image/upload/v1720040075/Eye_Lashes_qeexcq.jpg"}
                        aspectRatio={"wider"}
                    />
                </div>
            </div>
        </section>
    )
}