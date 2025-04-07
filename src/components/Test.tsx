import { useEffect, useState } from "react";
import {getPopularMovies, getTrending} from "@/services/tmdb";

export const Test = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getPopularMovies().then((data) => {
            setMovies(data.results);
        });
    }, []);

    useEffect(() => {
        getTrending('movie', 'day').then((data) => {
            setMovies(data.results);
        });
    }, []);

    return (
        <>
            <h1>Popular</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {movies.map((movie) => (
                    <div key={movie.id} className="rounded overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-auto"
                        />
                        <h3 className="text-base font-semibold mt-2">{movie.title}</h3>
                    </div>
                ))}
            </div>
            <h1>Trending</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                {movies.map((movie) => (
                    <div key={movie.id} className="rounded overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-auto"
                        />
                        <h3 className="text-base font-semibold mt-2">{movie.title}</h3>
                    </div>
                ))}
            </div>
        </>

    );
};