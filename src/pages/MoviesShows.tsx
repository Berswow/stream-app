import { Button } from "@/shared/ui/button.tsx";
import { Hero } from "@/widgets/MoviesShows/Hero.tsx";
import { TrendingMovies } from "@/widgets/MoviesShows/Movies/TrendingMovies.tsx";
import { UpcomingMovies } from "@/widgets/MoviesShows/Movies/UpcomingMovies.tsx";
import { NowPlayingMovies } from "@/widgets/MoviesShows/Movies/NowPlayingMovies.tsx";
import { TrendingShows } from "@/widgets/MoviesShows/TvShows/TrendingShows.tsx";
import { AiringToday } from "@/widgets/MoviesShows/TvShows/AiringToday.tsx";
import { OnTheAir } from "@/widgets/MoviesShows/TvShows/OnTheAir.tsx";
import {PopularMovies} from "@/widgets/MoviesShows/Movies/PopularMovies.tsx";
import {PopularShows} from "@/widgets/MoviesShows/TvShows/PopularShows.tsx";

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
                    <div className='flex flex-col gap-12.5 p-12.5'>

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
