import {lazy, Suspense, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {Button} from "@/components/ui/button.tsx";
import {Category} from "@/components/Home/Category.tsx";
import {TrendingMovies} from "@/components/MoviesShows/Movies/TrendingMovies.tsx";
import {NewReleasesMovies} from "@/components/MoviesShows/Movies/NewReleasesMovies.tsx";
import {MustWatchMovies} from "@/components/MoviesShows/Movies/MustWatchMovies.tsx";
import {TrendingShows} from "@/components/MoviesShows/Shows/TrendingShows.tsx";
import {NewReleasesShows} from "@/components/MoviesShows/Shows/NewReleasesShows.tsx";
import {MustWatchShows} from "@/components/MoviesShows/Shows/MustWatchShows.tsx";

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
                <fieldset className='border border-gray-700 rounded-xl p-12'>
                    <legend className='ml-10'><Button className='h-12.5'>Movies</Button></legend>
                    <div className='p-12'>
                        <Category title='Our Genres' description=''/>
                    </div>
                    <div className='p-12'>
                        <Category title='Popular Top 10 In Genres' description=''/>
                    </div>
                    <TrendingMovies/>
                    <NewReleasesMovies/>
                    <MustWatchMovies/>
                </fieldset>
            </section>

            <section className='flex flex-col gap-25 mt-25'>
                <fieldset className='border border-gray-700 rounded-xl p-12'>
                    <legend className='ml-10'><Button className='h-12.5'>Movies</Button></legend>
                    <div className='p-12'>
                        <Category title='Our Genres' description=''/>
                    </div>
                    <div className='p-12'>
                        <Category title='Popular Top 10 In Genres' description=''/>
                    </div>

                    {/*TrendingMovies Now*/}
                    <TrendingShows/>


                    {/*New Releases*/}

                    <NewReleasesShows/>



                    {/*Must - Watch Movies*/}

                    <MustWatchShows/>




                </fieldset>
            </section>
        </main>
    );
};