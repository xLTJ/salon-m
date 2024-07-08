"use client";
import React, {useEffect, useRef, useState} from "react";
import {useMotionValueEvent, useScroll} from "framer-motion";
import {motion} from "framer-motion";
import {cn} from "@/utils/cn";

export const StickyScroll = ({
                                 content,
                                 contentClassName,
                             }: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const {scrollYProgress} = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        target: ref,
        // container: ref,
        offset: ["25% 75%", "75% 25%"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "var(--white)",
        "var(--red-100)",
        "var(--orange-50)",
        "var(--slate-200)",
        "var(--amber-50)",
    ];
    const linearGradients = [
        "linear-gradient(to bottom right, var(--slate-500), var(white))",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0]
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="flex justify-center relative space-x-10 rounded-md p-10"
            ref={ref}
        >
            <div className="div relative flex items-start px-4">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="mb-8 lg:mb-32 mt-10">
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.1,
                                }}
                                className="text-3xl font-bold text-black"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-kg text-lg text-black max-w-xl mt-10"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="h-40"/>
                </div>
            </div>
            <div
                style={{background: backgroundGradient, transition: 'background 0.5s ease-in-out'}}
                className={cn(
                    "hidden lg:block h-[26rem] w-[32rem] rounded-md bg-white sticky top-[40vh] overflow-hidden",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
