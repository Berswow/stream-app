import { lazy} from "react";
import { Button } from "@/components/ui/button.tsx";
import { useInViewObserver } from "@/utils/hooks/useInViewObserver.ts";

const LazyHero = lazy(() => import("@/components/MoviesShows/Hero.tsx").then((module) => ({ default: module.Hero })));
const LazyCategory = lazy(() => import("@/components/Home/Category.tsx").then((module) => ({ default: module.Category })));
const LazyTrendingMovies = lazy(() => import("@/components/MoviesShows/Movies/TrendingMovies.tsx").then((module) => ({ default: module.TrendingMovies })));
const LazyNewReleasesMovies = lazy(() => import("@/components/MoviesShows/Movies/UpcomingMovies.tsx").then((module) => ({ default: module.UpcomingMovies })));
const LazyMustWatchMovies = lazy(() => import("@/components/MoviesShows/Movies/NowPlayingMovies.tsx").then((module) => ({ default: module.NowPlayingMovies })));
const LazyTrendingShows = lazy(() => import("@/components/MoviesShows/Shows/TrendingShows.tsx").then((module) => ({ default: module.TrendingShows })));
const LazyNewReleasesShows = lazy(() => import("@/components/MoviesShows/Shows/AiringToday.tsx").then((module) => ({ default: module.AiringToday })));
const LazyMustWatchShows = lazy(() => import("@/components/MoviesShows/Shows/OnTheAir.tsx").then((module) => ({ default: module.OnTheAir })));

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

    return (
        <main>
            <div ref={heroObserver.ref} className="min-h-[60vh] flex justify-center items-center">
                {heroObserver.isVisible && <LazyHero />}
            </div>

            {heroObserver.isVisible && (
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
                                    <LazyCategory title={title} description="" />
                                )}
                            </div>
                        ))}

                        <div ref={trendingMoviesObserver.ref} className="flex justify-center items-center">
                            {trendingMoviesObserver.isVisible && <LazyTrendingMovies />}
                        </div>

                        <div ref={newReleasesMoviesObserver.ref} className="flex justify-center items-center">
                            {newReleasesMoviesObserver.isVisible && <LazyNewReleasesMovies />}
                        </div>

                        <div ref={mustWatchMoviesObserver.ref} className="flex justify-center items-center">
                            {mustWatchMoviesObserver.isVisible && <LazyMustWatchMovies />}
                        </div>
                    </fieldset>
                </section>
            )}
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
                                    <LazyCategory title={title} description="" />
                                )}
                            </div>
                        ))}

                        <div ref={trendingShowsObserver.ref}>
                            {trendingShowsObserver.isVisible && <LazyTrendingShows />}
                        </div>

                        <div ref={newReleasesShowsObserver.ref}>
                            {newReleasesShowsObserver.isVisible && <LazyNewReleasesShows />}
                        </div>

                        <div ref={mustWatchShowsObserver.ref}>
                            {mustWatchShowsObserver.isVisible && <LazyMustWatchShows />}
                        </div>
                    </fieldset>
                </section>
        </main>
    );
};
