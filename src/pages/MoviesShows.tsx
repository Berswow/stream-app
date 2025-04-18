import { Button } from "@/components/ui/button.tsx";
import { Hero } from "@/components/MoviesShows/Hero.tsx";
import { TrendingMovies } from "@/components/MoviesShows/Movies/TrendingMovies.tsx";
import { UpcomingMovies } from "@/components/MoviesShows/Movies/UpcomingMovies.tsx";
import { NowPlayingMovies } from "@/components/MoviesShows/Movies/NowPlayingMovies.tsx";
import { TrendingShows } from "@/components/MoviesShows/Shows/TrendingShows.tsx";
import { AiringToday } from "@/components/MoviesShows/Shows/AiringToday.tsx";
import { OnTheAir } from "@/components/MoviesShows/Shows/OnTheAir.tsx";
import {PopularMovies} from "@/components/MoviesShows/Movies/PopularMovies.tsx";
import {PopularShows} from "@/components/MoviesShows/Shows/PopularShows.tsx";

export const MoviesShows = () => {


    return (
        <main>
            <div className="flex justify-center">
                <Hero />
            </div>

            <section className="flex flex-col gap-25 mt-25">
                <fieldset className="border border-gray-700 rounded-xl">
                    <legend className="ml-10">
                        <Button className="h-12.5">Movies</Button>
                    </legend>
                    <div className='p-12.5'>

                        <PopularMovies />
                        <TrendingMovies />
                        <UpcomingMovies />
                        <NowPlayingMovies />
                    </div>
                </fieldset>
            </section>

            <section className="flex flex-col gap-25 mt-25">
                <fieldset className="border border-gray-700 rounded-xl p-12.5">
                    <legend className="ml-10">
                        <Button className="h-12.5">Shows</Button>
                    </legend>
                    <div className='p-12.5'>
                        <PopularShows />
                        <TrendingShows />
                        <AiringToday />
                        <OnTheAir />
                    </div>
                </fieldset>
            </section>
        </main>
    );
};
