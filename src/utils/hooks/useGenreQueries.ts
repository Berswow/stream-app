import { useMemo } from "react";

type GenreQueryHook<T> = () => {
    data?: T[] | null;  // Можем явно указать, что data может быть null
    isLoading: boolean;
    error?: unknown;
};

type GenreQueries<T> = {
    genre: string;
    hook: GenreQueryHook<T>;
}[];

// Данный хук возвращает результаты нескольких запросов с типизацией
export function useGenreQueries<T>(queries: GenreQueries<T>) {
    const results = queries.map(({ genre, hook }) => {
        const { data, isLoading, error } = hook();
        return {
            genre,
            data: data ? data.slice(0, 4) : [],  // Защищаем от null и undefined, используя пустой массив
            isLoading,
            error,
        };
    });

    const isLoading = results.some((r) => r.isLoading);
    const isError = results.some((r) => r.error);

    // Мемоизация данных по жанрам для предотвращения лишних перерасчётов
    const genreMap = useMemo(() => {
        const map: Record<string, T[]> = {};
        results.forEach(({ genre, data }) => {
            map[genre] = data;
        });
        return map;
    }, [results]);

    return { genreMap, isLoading, isError };
}
