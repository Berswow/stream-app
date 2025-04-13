interface GenreQuery<T> {
    genre: string;
    params: {
        sort_by?: string;
        release_years?: number[];
        languages?: string[];
        genres?: number[];
    };
}

export type GenreQueries<T> = GenreQuery<T>[];