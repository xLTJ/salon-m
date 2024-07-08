'use client'
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import {Suspense, useState} from "react";

export default function Gallery() {
    const [index, setIndex] = useState(-1);

    return (
        <div className={"container mx-auto mb-16"}>
            <Suspense fallback={<span className="absolute inset-[50%] loading loading-spinner loading-lg"></span>}>
                <PhotoAlbum
                    layout="masonry"
                    photos={slides}
                    targetRowHeight={300}
                />
            </Suspense>
        </div>
    );
}

export const slides = [
    {
        src: "https://res.cloudinary.com/drpcy82zw/image/upload/v1720452133/Female-haircut-4_s8ozxl.jpg",
        width: 1125,
        height: 972
    },
    {
        src: "https://res.cloudinary.com/drpcy82zw/image/upload/v1720452477/female-haircut-5_d4tl3x.jpg",
        width: 3024,
        height: 2626
    },
    {
        src: "https://res.cloudinary.com/drpcy82zw/image/upload/v1720453118/female-hair-comparison-1b_fop5ai.jpg",
        width: 1125,
        height: 1359
    },
    {
        src: "https://res.cloudinary.com/drpcy82zw/image/upload/v1720458700/female-haircut-6_myq985.jpg",
        width: 3024,
        height: 4032
    },
    {
        src: "https://res.cloudinary.com/drpcy82zw/image/upload/v1720458700/female-haircut-7_pfwlud.jpg",
        width: 3024,
        height: 4032
    },
    {
        src: "https://res.cloudinary.com/drpcy82zw/image/upload/v1720458737/female-haircut-8_tbvw7n.jpg",
        width: 2566,
        height: 3638
    },
]