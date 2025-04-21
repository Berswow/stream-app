export interface MultiSearchResult {
    page: number;
    results: MultiSearchItem[];
    total_pages: number;
    total_results: number;
}

export type MultiSearchItem =
    | MultiMovieResult
    | MultiTvResult
    | MultiPersonResult;

export interface MultiBase {
    id: number;
    media_type: 'movie' | 'tv' | 'person';
    popularity: number;
}

export interface MultiMovieResult extends MultiBase {
    media_type: 'movie';
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MultiTvResult extends MultiBase {
    media_type: 'tv';
    backdrop_path: string | null;
    genre_ids: number[];
    original_language: string;
    overview: string;
    poster_path: string | null;
    first_air_date: string;
    name: string;
    original_name: string;
    vote_average: number;
    vote_count: number;
}

export interface MultiPersonResult extends MultiBase {
    media_type: 'person';
    name: string;
    profile_path: string | null;
    known_for: (MultiMovieResult | MultiTvResult)[];
}

export interface MultiSearchQuery {
    query: string;
    page: number;
    include_adult: boolean;
}