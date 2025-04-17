import {MovieHero} from "@/components/Movie/MovieHero.tsx";
import {MovieDescription} from "@/components/Movie/MovieDescription.tsx";
import {MovieCast} from "@/components/Movie/MovieCast.tsx";
import {MovieReviews} from "@/components/Movie/MovieReviews.tsx";
import {MovieStats} from "@/components/Movie/MovieStats.tsx";
import {useParams} from "react-router-dom";
import {useGetMovieDetailsQuery} from "@/services/tmdb/moviesApi.ts";
import {MovieSimilar} from "@/components/Movie/MovieSimilar.tsx";



export const Movie = () => {
    const { id } = useParams();
    const movieId = Number(id);

    const { data: movie, isLoading, error } = useGetMovieDetailsQuery(id!);


    if (isLoading) return <div>Загрузка фильма...</div>;
    if (error || !movie) return <div>Ошибка загрузки данных</div>;

    return (
        <div className="flex flex-col gap-25">
            <MovieHero movie={movie} />
            <div className="flex justify-between gap-5">
                <div className="flex flex-col max-w-[1057px] gap-7.5">
                    <MovieDescription overview={movie.overview} />
                    <MovieCast />
                    <MovieSimilar movieId={movieId}/>
                    <MovieReviews movieId={movieId}/>
                </div>
                <div>
                    <MovieStats movie={movie} movieId={movieId} />
                </div>
            </div>
        </div>
    );
};