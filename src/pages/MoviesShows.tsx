import {Movies} from "@/components/MoviesShows/Movies.tsx";
import {Shows} from "@/components/MoviesShows/Shows.tsx";
import {lazy, Suspense, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

const LazyHero = lazy(() => import("@/components/MoviesShows/Hero.tsx").then((module) => ({default: module.Hero})));

export const MoviesShows = () => {
    const [isHeroVisible, setIsHeroVisible] = useState(false);

    const {ref: heroRef, inView: heroInView} = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });

    useEffect(() => {
        if (heroInView) setIsHeroVisible(true);
    }, [heroInView]);

    return (
        <main>
            <div ref={heroRef} className="min-h-[60vh] flex justify-center items-center">
                {isHeroVisible && (
                    <Suspense>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.8, ease: "easeOut"}}
                        >
                            <LazyHero/>
                        </motion.div>
                    </Suspense>
                )}
            </div>
            <section className='flex flex-col gap-25 mt-25'>
                <Movies/>
                <Shows/>
            </section>
        </main>
    );
};