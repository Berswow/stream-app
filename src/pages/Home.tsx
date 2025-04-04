import { lazy, Suspense, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const LazyHero = lazy(() => import("@/components/Home/Hero.tsx").then((module) => ({ default: module.Hero })));
const LazyCategory = lazy(() => import("@/components/Home/Category").then((module) => ({ default: module.Category })));
const LazyDevices = lazy(() => import("@/components/Home/Devices").then((module) => ({ default: module.Devices })));
const LazyFaq = lazy(() => import("@/components/Home/Faq").then((module) => ({ default: module.Faq })));
const LazySubscription = lazy(() => import("@/components/Home/Subscription.tsx").then((module) => ({ default: module.Subscription })));

export const Home = () => {
    const [isHeroVisible, setIsHeroVisible] = useState(false);
    const [isCategoryVisible, setIsCategoryVisible] = useState(false);
    const [isDevicesVisible, setIsDevicesVisible] = useState(false);
    const [isFaqVisible, setIsFaqVisible] = useState(false);
    const [isSubscriptionVisible, setIsSubscriptionVisible] = useState(false);

    const { ref: heroRef, inView: heroInView } = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

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
        if (heroInView) setIsHeroVisible(true);
    }, [heroInView]);

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
            <div ref={heroRef} className="min-h-[60vh] flex justify-center items-center">
                {isHeroVisible && (
                    <Suspense>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <LazyHero />
                        </motion.div>
                    </Suspense>
                )}
            </div>

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