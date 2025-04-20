import { useGetFilteredMoviesQuery } from "@/services/tmdb/filterApi.ts";

interface Genre {
    id: number;
    name: string;
}

export const usePopularMoviesByGenres = (genres: Genre[]) => {
    // Инициализация хуков перед любыми циклами и условиями
    const queryResults = genres.map((genre) => {
        // Здесь вызываем хук для каждого жанра
        return useGetFilteredMoviesQuery({ genres: [genre.id] });
    });

    // Состояния загрузки и ошибок для всех запросов
    const isLoading = queryResults.some((result) => result.isLoading);
    const isError = queryResults.some((result) => result.isError);

    // Формируем объект с результатами по каждому жанру
    const genreMap = genres.reduce((acc, genre, index) => {
        // Заполняем объект данными по каждому жанру
        acc[genre.name] = queryResults[index].data ?? [];
        return acc;
    }, {} as Record<string, any[]>);

    return { genreMap, isLoading, isError };
};
