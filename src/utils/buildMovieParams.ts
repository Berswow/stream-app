export const buildMovieParams = ({
                                     sort_by,
                                     primary_release_year,
                                     with_genres,
                                     original_language
                                 }: {
    sort_by?: string;
    primary_release_year?: number;
    with_genres?: string;
    original_language?: string;
}) => {
    return {
        sort_by,
        with_genres,
        primary_release_year,
        with_original_language: original_language,
        certification_country: 'US',
        language: 'en-US',
        page: 1
    };
};