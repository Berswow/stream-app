import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/layout/Header.tsx";
import { Footer } from "@/layout/Footer.tsx";
import { BackgroundGrid } from "@/components/Home/BackgroundGrid.tsx";
import { AnimatePresence, motion } from "framer-motion";

export const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    // При первом рендере снимаем флаг isFirstLoad
    useEffect(() => {
        setIsFirstLoad(false);
    }, []);

    return (
        <div>
            {isHomePage ? (
                <div className="relative min-h-screen">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="background"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <BackgroundGrid />
                        </motion.div>
                    </AnimatePresence>

                    <div className="relative z-10 container">
                        {/* Анимация только при первой загрузке */}
                        {isFirstLoad ? (
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key="header"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                >
                                    <Header />
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <Header />
                        )}

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={location.pathname}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <Outlet />
                            </motion.div>
                        </AnimatePresence>
                        <Footer />
                    </div>
                </div>
            ) : (
                <div className="container">
                    <Header />
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                            <Footer />
                        </motion.div>
                    </AnimatePresence>

                </div>
            )}
        </div>
    );
};
