import { CategoryBlock } from "@/entities/movie/CategoryBlock.tsx";
import { MovieInterface } from "@/shared/interfaces/Movie/MovieBaseInterface.ts";
import { useGetFilteredMoviesQuery } from "@/services/tmdb/filterApi.ts";
import { MOVIE_GENRES } from "@/shared/constants/genres.ts";

export const PopularMovies = () => {
    // Не пробовать использовать callback или map. Будет ругаться ESLint на правила хуков
    // Вручную вызываем каждый жанр
    const { data: data1, isLoading: l1, isError: e1 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[0].id] });
    const { data: data2, isLoading: l2, isError: e2 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[1].id] });
    const { data: data3, isLoading: l3, isError: e3 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[2].id] });
    const { data: data4, isLoading: l4, isError: e4 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[3].id] });
    const { data: data5, isLoading: l5, isError: e5 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[4].id] });
    const { data: data6, isLoading: l6, isError: e6 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[5].id] });
    const { data: data7, isLoading: l7, isError: e7 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[6].id] });
    const { data: data8, isLoading: l8, isError: e8 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[7].id] });
    const { data: data9, isLoading: l9, isError: e9 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[8].id] });
    const { data: data10, isLoading: l10, isError: e10 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[9].id] });
    const { data: data11, isLoading: l11, isError: e11 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[10].id] });
    const { data: data12, isLoading: l12, isError: e12 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[11].id] });
    const { data: data13, isLoading: l13, isError: e13 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[12].id] });
    const { data: data14, isLoading: l14, isError: e14 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[13].id] });
    const { data: data15, isLoading: l15, isError: e15 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[14].id] });
    const { data: data16, isLoading: l16, isError: e16 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[15].id] });
    const { data: data17, isLoading: l17, isError: e17 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[16].id] });
    const { data: data18, isLoading: l18, isError: e18 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[17].id] });
    const { data: data19, isLoading: l19, isError: e19 } = useGetFilteredMoviesQuery({ genres: [MOVIE_GENRES[18].id] });


    const isLoading = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16, l17, l18, l19].includes(true);
    const isError = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18, e19].includes(true);


    const genreMap = {
        [MOVIE_GENRES[0].name]: data1 ?? [],
        [MOVIE_GENRES[1].name]: data2 ?? [],
        [MOVIE_GENRES[2].name]: data3 ?? [],
        [MOVIE_GENRES[3].name]: data4 ?? [],
        [MOVIE_GENRES[4].name]: data5 ?? [],
        [MOVIE_GENRES[5].name]: data6 ?? [],
        [MOVIE_GENRES[6].name]: data7 ?? [],
        [MOVIE_GENRES[7].name]: data8 ?? [],
        [MOVIE_GENRES[8].name]: data9 ?? [],
        [MOVIE_GENRES[9].name]: data10 ?? [],
        [MOVIE_GENRES[10].name]: data11 ?? [],
        [MOVIE_GENRES[11].name]: data12 ?? [],
        [MOVIE_GENRES[12].name]: data13 ?? [],
        [MOVIE_GENRES[13].name]: data14 ?? [],
        [MOVIE_GENRES[14].name]: data15 ?? [],
        [MOVIE_GENRES[15].name]: data16 ?? [],
        [MOVIE_GENRES[16].name]: data17 ?? [],
        [MOVIE_GENRES[17].name]: data18 ?? [],
        [MOVIE_GENRES[18].name]: data19 ?? [],
    };

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка загрузки</div>;

    return (
        <article>
            <CategoryBlock<MovieInterface>
                title="Top Movies by Genre"
                genres={MOVIE_GENRES.map((g) => g.name)}
                genreMap={genreMap}
                getId={(item) => item.id}
                getImage={(item) => `https://image.tmdb.org/t/p/w154${item.poster_path}`}
                getTitle={(item) => item.original_title}
                contentType="movie"
            />
        </article>
    );
};
