import { Intro } from "@/components/Home/Intro.tsx";
import { lazy, Suspense, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const LazyCategory = lazy(() => import("@/components/Home/Category").then((module) => ({ default: module.Category })));

export const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Запускаем только один раз
        threshold: 0.2, // Сработает, когда 20% компонента попадёт в зону видимости
    });

    if (inView && !isVisible) {
        setIsVisible(true);
    }

    return (
        <main className="flex flex-col">
            <Intro />
            <div ref={ref} className="min-h-[100vh] flex justify-center items-center">
                {isVisible && (
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
        </main>
    );
};