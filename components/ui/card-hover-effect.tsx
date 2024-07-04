'use client'

import {cn} from "@/utils/cn";
import {AnimatePresence, motion} from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";

export const HoverEffect = ({
                                items,
                                className,
                            }: {
    items: {
        title: string;
        description?: string;
        link: string;
        image_url?: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        setIsPhone(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent));
    }, []);

    return (
        <div
            className={cn(
                "grid grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {/*{!isPhone && <AnimatePresence>*/}
                    {/*    {hoveredIndex === idx && (*/}
                    {/*        <motion.span*/}
                    {/*            className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] rounded-3xl"*/}
                    {/*            layoutId="hoverBackground"*/}
                    {/*            initial={{opacity: 0}}*/}
                    {/*            animate={{*/}
                    {/*                opacity: 1,*/}
                    {/*                transition: {duration: 0.15},*/}
                    {/*            }}*/}
                    {/*            exit={{*/}
                    {/*                opacity: 0,*/}
                    {/*                transition: {duration: 0.15, delay: 0.2},*/}
                    {/*            }}*/}
                    {/*        />*/}
                    {/*    )}*/}
                    {/*</AnimatePresence>}*/}
                    <Card image_url={item.image_url}>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
                         className,
                         children,
                         image_url,
                     }: {
    className?: string;
    children: React.ReactNode;
    image_url?: string;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-32 md:h-72 w-full overflow-hidden bg-black group-hover:border-slate-700 relative z-20 bg-cover bg-center border-2 border-black",
                className
            )}
            style={{
                backgroundImage: `url(${image_url})`,
            }}
        >
            <div className="relative z-50 bg-black bg-opacity-50 p-4 w-full h-full flex flex-col justify-center">
                <div className="p-4">{children}</div>
            </div>
            <div
                className="absolute inset-0 bg-cover bg-center filter group-hover:blur-sm transition-all duration-300 ease-in-out"
                style={{backgroundImage: `url(${image_url})`}}
            />
        </div>
    );
};
export const CardTitle = ({
                              className,
                              children,
                          }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold text-2xl md:text-4xl tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
                                    className,
                                    children,
                                }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};