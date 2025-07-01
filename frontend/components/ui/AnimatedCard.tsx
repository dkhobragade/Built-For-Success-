"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedCardProps
{
    children: React.ReactNode;
    direction?: "left" | "right" | "bottom";
}

export default function AnimatedCard ( { children, direction = "bottom", }: AnimatedCardProps )
{
    const { ref, inView } = useInView( { triggerOnce: false } );

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
            y: direction === "bottom" ? 50 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5,
            },
        },
    };

    return (
        <motion.div ref={ ref } initial="hidden" animate={ inView ? "visible" : "hidden" } variants={ variants }>
            { children }
        </motion.div>
    );
}
