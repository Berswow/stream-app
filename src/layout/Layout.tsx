import {Outlet, useLocation} from "react-router-dom";
import {Header} from "@/layout/Header.tsx";
import {BackgroundGrid} from "@/components/Home/BackgroundGrid.tsx";
import {AnimatePresence, motion} from "framer-motion";
import {lazy, Suspense, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

const LazyAdvertisement = lazy(() => import("@/layout/Advertisement").then((module) => ({default: module.Advertisement})));
const LazyFooter = lazy(() => import("@/layout/Footer").then((module) => ({default: module.Footer})));

export const Layout = () => {
    const [isAdvertisementVisible, setIsAdvertisementVisible] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    const {ref: advertisementRef, inView: advertisementInView} = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

    const {ref: footerRef, inView: footerInView} = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

    useEffect(() => {
        if (advertisementInView) setIsAdvertisementVisible(true);
    }, [advertisementInView]);

    useEffect(() => {
        if (footerInView) setIsFooterVisible(true);
    }, [footerInView]);


    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <div>
            {isHomePage ? (
                <div className="relative min-h-screen">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="background"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.4, ease: "easeInOut"}}
                        >
                            <BackgroundGrid/>
                        </motion.div>
                    </AnimatePresence>

                    <div className="relative z-10 container">
                        {/* Анимация только при первой загрузке */}
                        <Header/>
                        <Outlet/>
                        <div ref={advertisementRef} className="min-h-[40vh]">
                            {isAdvertisementVisible && (
                                <Suspense>
                                    <motion.div
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.8, ease: "easeOut"}}
                                    >
                                        <LazyAdvertisement/>
                                    </motion.div>
                                </Suspense>
                            )}
                        </div>
                        <div ref={footerRef} className="min-h-[40vh]">
                            {isFooterVisible && (
                                <Suspense>
                                    <motion.div
                                        initial={{opacity: 0, y: 20}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.8, ease: "easeOut"}}
                                    >
                                        <LazyFooter/>
                                    </motion.div>
                                </Suspense>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <Header/>
                    <Outlet/>
                    <div ref={advertisementRef} className="min-h-[40vh]">
                        {isAdvertisementVisible && (
                            <Suspense>
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, ease: "easeOut"}}
                                >
                                    <LazyAdvertisement/>
                                </motion.div>
                            </Suspense>
                        )}
                    </div>
                    <div ref={footerRef} className="min-h-[40vh]">
                        {isFooterVisible && (
                            <Suspense>
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, ease: "easeOut"}}
                                >
                                    <LazyFooter/>
                                </motion.div>
                            </Suspense>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
