type GenreQueryHook<T> = () => {
    data?: T[];
    isLoading: boolean;
    isError: boolean;
};
type GenreQueries<T> = {
    genre: string;
    hook: GenreQueryHook<T>;
}[];

export function useGenreQueries<T>(queries: GenreQueries<T>) {
    const results = queries.map(({ genre, hook }) => {
        const { data, isLoading, isError } = hook();
        return { genre, data, isLoading, isError };
    });

    const isLoading = results.some((r) => r.isLoading);
    const isError = results.some((r) => r.isError);

    const genreMap = results.reduce((acc, { genre, data }) => {
        acc[genre] = data?.slice(0, 10) || [];
        return acc;
    }, {} as Record<string, T[]>);

    return { genreMap, isLoading, isError };
}
