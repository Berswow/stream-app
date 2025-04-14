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
import {MOVIE_GENRES} from "@/constants/genres.ts";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setClearGenres, setGenres} from "@/redux/slices/filterSlice.ts";

export const MoviesShows = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <main>
            <div className="flex justify-center">
                <Hero />
            </div>

            <section className="px-8 py-6 my-50">
                <h2 className="text-2xl font-semibold mb-4">Browse by Genre</h2>
                <div className="flex flex-wrap gap-4">
                    {MOVIE_GENRES.map((genre) => (
                        <button
                            key={genre.id}
                            onClick={() => {
                                dispatch(setClearGenres()); // очищаем жанры
                                dispatch(setGenres([genre.id])); // устанавливаем новый жанр
                                navigate(`/movies/genre/${genre.id}`); // переходим на страницу с жанром
                            }}
                            className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-full text-sm transition"
                        >
                            {genre.name}
                        </button>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-25 mt-25">
                <fieldset className="border border-gray-700 rounded-xl">
                    <legend className="ml-10">
                        <Button className="h-12.5">Movies</Button>
                    </legend>
                    <div className="flex justify-center items-center">
                        <PopularMovies />
                    </div>
                    <div className="flex justify-center items-center">
                        <TrendingMovies />
                    </div>

                    <div className="flex justify-center items-center">
                        <UpcomingMovies />
                    </div>

                    <div className="flex justify-center items-center">
                        <NowPlayingMovies />
                    </div>
                </fieldset>
            </section>

            <section className="flex flex-col gap-25 mt-25">
                <fieldset className="border border-gray-700 rounded-xl p-12">
                    <legend className="ml-10">
                        <Button className="h-12.5">Shows</Button>
                    </legend>
                    <div className='p-12'>
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
