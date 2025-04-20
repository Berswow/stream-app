import { FC, ReactNode, Suspense } from "react";
import { motion } from "framer-motion";

interface LazySectionProps {
    children: ReactNode;
    className?: string;
    direction?: "y" | "x" | "none";
}

export const LazySection: FC<LazySectionProps> = ({ children, className, direction = "y" }) => {
    const initial = direction === "y"
        ? { opacity: 0, y: 20 }
        : direction === "x"
            ? { opacity: 0, x: 20 }
            : { opacity: 0 };

    const animate = { opacity: 1, x: 0, y: 0 };

    return (
        <Suspense>
            <motion.div
                className={className}
                initial={initial}
                animate={animate}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </Suspense>
    );
};