export const buildMovieParams = ({
                                     sort_by,
                                     primary_release_year,
                                     original_language,
                                     with_genres,
                                 }: {
    sort_by: string;
    primary_release_year?: number;
    original_language?: string;
    with_genres?: string;
}) => {
    const params: Record<string, string> = {
        sort_by,
    };

    if (primary_release_year) params.primary_release_year = String(primary_release_year);
    if (original_language) params.with_original_language = original_language;
    if (with_genres) params.with_genres = with_genres;

    return params;
};