import { Intro } from "@/components/Home/Intro.tsx";
import { lazy, Suspense, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const LazyCategory = lazy(() => import("@/components/Home/Category").then((module) => ({ default: module.Category })));
const LazyDevices = lazy(() => import("@/components/Home/Devices").then((module) => ({ default: module.Devices })));

export const Home = () => {
    const [isCategoryVisible, setIsCategoryVisible] = useState(false);
    const [isDevicesVisible, setIsDevicesVisible] = useState(false);

    const { ref: categoryRef, inView: categoryInView } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });

    const { ref: devicesRef, inView: devicesInView } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    });

    useEffect(() => {
        if (categoryInView) setIsCategoryVisible(true);
    }, [categoryInView]);

    useEffect(() => {
        if (devicesInView) setIsDevicesVisible(true);
    }, [devicesInView]);

    return (
        <main className="flex flex-col">
            <Intro />

            <div ref={categoryRef} className="min-h-[60vh] flex justify-center items-center">
                {isCategoryVisible && (
                    <Suspense>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <LazyCategory />
                        </motion.div>
                    </Suspense>
                )}
            </div>

            <div ref={devicesRef} className="min-h-[30vh] flex justify-center items-center">
                {isDevicesVisible && (
                    <Suspense>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <LazyDevices />
                        </motion.div>
                    </Suspense>
                )}
            </div>
        </main>
    );
};