import { Intro } from "@/components/Home/Intro.tsx";
import { lazy, Suspense, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const LazyCategory = lazy(() => import("@/components/Home/Category").then((module) => ({ default: module.Category })));
const LazyDevices = lazy(() => import("@/components/Home/Devices").then((module) => ({ default: module.Devices })));
const LazyFaq = lazy(() => import("@/components/Home/Faq").then((module) => ({ default: module.Faq })));
const LazySubscription = lazy(() => import("@/components/Home/Subscription").then((module) => ({ default: module.Subscription })));

export const Home = () => {
    const [isCategoryVisible, setIsCategoryVisible] = useState(false);
    const [isDevicesVisible, setIsDevicesVisible] = useState(false);
    const [isFaqVisible, setIsFaqVisible] = useState(false);
    const [isSubscriptionVisible, setIsSubscriptionVisible] = useState(false);

    const { ref: categoryRef, inView: categoryInView } = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

    const { ref: devicesRef, inView: devicesInView } = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

    const { ref: faqRef, inView: faqInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const { ref: subscriptionRef, inView: subscriptionInView } = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

    useEffect(() => {
        if (categoryInView) setIsCategoryVisible(true);
    }, [categoryInView]);

    useEffect(() => {
        if (devicesInView) setIsDevicesVisible(true);
    }, [devicesInView]);

    useEffect(() => {
        if (faqInView) setIsFaqVisible(true);
    }, [faqInView]);

    useEffect(() => {
        if (subscriptionInView) setIsSubscriptionVisible(true);
    }, [subscriptionInView]);

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

            <div ref={faqRef} className="min-h-[60vh] flex justify-center items-center">
                {isFaqVisible && (
                    <Suspense>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <LazyFaq/>
                        </motion.div>
                    </Suspense>
                )}
            </div>

            <div ref={subscriptionRef} className="min-h-[30vh] flex justify-center items-center">
                {isSubscriptionVisible && (
                    <Suspense>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <LazySubscription/>
                        </motion.div>
                    </Suspense>
                )}
            </div>
        </main>
    );
};