import {lazy, useState, useEffect} from "react";
import {Button} from "@/components/ui/button.tsx";
import {LazySection} from "@/components/LazySection";
import {useInViewObserver} from "@/utils/hooks/useInViewObserver.ts";

const LazyHero = lazy(() => import("@/components/MoviesShows/Hero.tsx").then((module) => ({default: module.Hero})));
const LazyCategory = lazy(() => import("@/components/Home/Category.tsx").then((module) => ({default: module.Category})));
const LazyTrendingMovies = lazy(() => import("@/components/MoviesShows/Movies/TrendingMovies.tsx").then((module) => ({default: module.TrendingMovies})));
const LazyNewReleasesMovies = lazy(() => import("@/components/MoviesShows/Movies/NewReleasesMovies.tsx").then((module) => ({default: module.NewReleasesMovies})));
const LazyMustWatchMovies = lazy(() => import("@/components/MoviesShows/Movies/MustWatchMovies.tsx").then((module) => ({default: module.MustWatchMovies})));
const LazyTrendingShows = lazy(() => import("@/components/MoviesShows/Shows/TrendingShows.tsx").then((module) => ({default: module.TrendingShows})));
const LazyNewReleasesShows = lazy(() => import("@/components/MoviesShows/Shows/NewReleasesShows.tsx").then((module) => ({default: module.NewReleasesShows})));
const LazyMustWatchShows = lazy(() => import("@/components/MoviesShows/Shows/MustWatchShows.tsx").then((module) => ({default: module.MustWatchShows})));

export const MoviesShows = () => {
    const heroObserver = useInViewObserver();
    const movieCategoryObservers = [useInViewObserver(), useInViewObserver()];
    const showCategoryObservers = [useInViewObserver(), useInViewObserver()];
    const trendingMoviesObserver = useInViewObserver();
    const newReleasesMoviesObserver = useInViewObserver();
    const mustWatchMoviesObserver = useInViewObserver();
    const trendingShowsObserver = useInViewObserver();
    const newReleasesShowsObserver = useInViewObserver();
    const mustWatchShowsObserver = useInViewObserver();

    // Состояние для контроля отображения секции Shows после задержки
    const [showShowsSection, setShowShowsSection] = useState(false);
    const [showMovieSection, setShowMovieSection] = useState(false);

    // Эффект для задержки отображения секции Shows
    useEffect(() => {
        if (heroObserver.isVisible) {
            const timer = setTimeout(() => {
                setShowShowsSection(true); // Показываем Shows через 1 секунду
            }, 1000); // Задержка 1 секунда

            return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
        }
    }, [heroObserver.isVisible]);

    useEffect(() => {
        if (heroObserver.isVisible) {
            const timer = setTimeout(() => {
                setShowMovieSection(true); // Показываем Shows через 1 секунду
            }, 1000); // Задержка 1 секунда

            return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
        }
    }, [heroObserver.isVisible]);

    return (
        <main>
            <div ref={heroObserver.ref} className="min-h-[60vh] flex justify-center items-center">
                {heroObserver.isVisible && (
                    <LazySection direction="none">
                        <LazyHero/>
                    </LazySection>
                )}
            </div>

            {heroObserver.isVisible && showMovieSection && (
                <LazySection>
                    <section className="flex flex-col gap-25 mt-25">
                        <fieldset className="border border-gray-700 rounded-xl">
                            <legend className="ml-10">
                                <Button className="h-12.5">Movies</Button>
                            </legend>

                            {["Our Genres", "Popular Top 10 In Genres"].map((title, index) => (
                                <div
                                    key={index}
                                    ref={movieCategoryObservers[index].ref}
                                    className="flex justify-center items-center p-12"
                                >
                                    {movieCategoryObservers[index].isVisible && (
                                        <LazySection>
                                            <LazyCategory title={title} description=""/>
                                        </LazySection>
                                    )}
                                </div>
                            ))}

                            <div ref={trendingMoviesObserver.ref} className="flex justify-center items-center">
                                {trendingMoviesObserver.isVisible && (
                                    <LazySection>
                                        <LazyTrendingMovies/>
                                    </LazySection>
                                )}
                            </div>

                            <div ref={newReleasesMoviesObserver.ref} className="flex justify-center items-center">
                                {newReleasesMoviesObserver.isVisible && (
                                    <LazySection>
                                        <LazyNewReleasesMovies/>
                                    </LazySection>
                                )}
                            </div>

                            <div ref={mustWatchMoviesObserver.ref} className="flex justify-center items-center">
                                {mustWatchMoviesObserver.isVisible && (
                                    <LazySection>
                                        <LazyMustWatchMovies/>
                                    </LazySection>
                                )}
                            </div>
                        </fieldset>
                    </section>
                </LazySection>
            )}

            {showShowsSection && (
                <LazySection>
                    <section className="flex flex-col gap-25 mt-25">
                        <fieldset className="border border-gray-700 rounded-xl p-12">
                            <legend className="ml-10">
                                <Button className="h-12.5">Shows</Button>
                            </legend>

                            {["Our Genres", "Popular Top 10 In Genres"].map((title, index) => (
                                <div
                                    key={index}
                                    ref={showCategoryObservers[index].ref}
                                    className="p-12"
                                >
                                    {showCategoryObservers[index].isVisible && (
                                        <LazySection>
                                            <LazyCategory title={title} description=""/>
                                        </LazySection>
                                    )}
                                </div>
                            ))}

                            <div ref={trendingShowsObserver.ref}>
                                {trendingShowsObserver.isVisible && (
                                    <LazySection>
                                        <LazyTrendingShows/>
                                    </LazySection>
                                )}
                            </div>

                            <div ref={newReleasesShowsObserver.ref}>
                                {newReleasesShowsObserver.isVisible && (
                                    <LazySection>
                                        <LazyNewReleasesShows/>
                                    </LazySection>
                                )}
                            </div>

                            <div ref={mustWatchShowsObserver.ref}>
                                {mustWatchShowsObserver.isVisible && (
                                    <LazySection>
                                        <LazyMustWatchShows/>
                                    </LazySection>
                                )}
                            </div>
                        </fieldset>
                    </section>
                </LazySection>
            )}
        </main>
    );
};
