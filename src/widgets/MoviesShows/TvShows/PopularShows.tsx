import { CategoryBlock } from "@/entities/movie/CategoryBlock.tsx";
import { TvShowInterface } from "@/shared/interfaces/Show/TvShowBaseInterface.ts";
import { useGetFilteredTvShowsQuery } from "@/services/tmdb/filterApi.ts";
import { TV_GENRES } from "@/shared/constants/genres";


export const PopularShows = () => {
    // Не пробуем использовать callback или map, чтобы избежать проблем с ESLint на хуках
    // Вручную вызываем каждый жанр
    const { data: data1, isLoading: l1, isError: e1 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[0].id] });
    const { data: data2, isLoading: l2, isError: e2 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[1].id] });
    const { data: data3, isLoading: l3, isError: e3 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[2].id] });
    const { data: data4, isLoading: l4, isError: e4 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[3].id] });
    const { data: data5, isLoading: l5, isError: e5 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[4].id] });
    const { data: data6, isLoading: l6, isError: e6 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[5].id] });
    const { data: data7, isLoading: l7, isError: e7 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[6].id] });
    const { data: data8, isLoading: l8, isError: e8 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[7].id] });
    const { data: data9, isLoading: l9, isError: e9 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[8].id] });
    const { data: data10, isLoading: l10, isError: e10 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[9].id] });
    const { data: data11, isLoading: l11, isError: e11 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[10].id] });
    const { data: data12, isLoading: l12, isError: e12 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[11].id] });
    const { data: data13, isLoading: l13, isError: e13 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[12].id] });
    const { data: data14, isLoading: l14, isError: e14 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[13].id] });
    const { data: data15, isLoading: l15, isError: e15 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[14].id] });
    const { data: data16, isLoading: l16, isError: e16 } = useGetFilteredTvShowsQuery({ genres: [TV_GENRES[15].id] });

    // Проверка состояния загрузки и ошибок
    const isLoading = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12, l13, l14, l15, l16].includes(true);
    const isError = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16].includes(true);

    // Формируем map для жанров
    const genreMap = {
        [TV_GENRES[0].name]: data1 ?? [],
        [TV_GENRES[1].name]: data2 ?? [],
        [TV_GENRES[2].name]: data3 ?? [],
        [TV_GENRES[3].name]: data4 ?? [],
        [TV_GENRES[4].name]: data5 ?? [],
        [TV_GENRES[5].name]: data6 ?? [],
        [TV_GENRES[6].name]: data7 ?? [],
        [TV_GENRES[7].name]: data8 ?? [],
        [TV_GENRES[8].name]: data9 ?? [],
        [TV_GENRES[9].name]: data10 ?? [],
        [TV_GENRES[10].name]: data11 ?? [],
        [TV_GENRES[11].name]: data12 ?? [],
        [TV_GENRES[12].name]: data13 ?? [],
        [TV_GENRES[13].name]: data14 ?? [],
        [TV_GENRES[14].name]: data15 ?? [],
        [TV_GENRES[15].name]: data16 ?? [],
    };

    if (isLoading) return <div>Загрузка...</div>;
    if (isError) return <div>Ошибка загрузки</div>;

    return (
        <article>
            <CategoryBlock<TvShowInterface>
                title="Top Shows by Genre"
                genres={TV_GENRES.map((g) => g.name)}
                genreMap={genreMap}
                getId={(item) => item.id}
                getImage={(item) => `https://image.tmdb.org/t/p/w154${item.poster_path}`}
                getTitle={(item) => item.name} // Для сериалов используем name
                contentType="tv" // Указываем тип контента как сериал
            />
        </article>
    );
};
