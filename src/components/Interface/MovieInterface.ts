export interface MovieInterface{
    id: number;
    title: string;
    original_title: string;
    overview: string;
    release_date: string;
    genre_ids: number[];
    adult: boolean;
    video: boolean;
    vote_average: number;
    vote_count: number;
    popularity: number;
    original_language: string;
    backdrop_path: string;
    poster_path: string;
    media_type: string;
}