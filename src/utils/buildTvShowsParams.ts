interface Params {
    sort_by?: string;
    with_genres?: string;
    original_language?: string;
    primary_release_year?: number;
    page?: number;
}

export function buildTvShowParams(params: Params) {
    const result: Record<string, string> = {};

    if (params.sort_by) result['sort_by'] = params.sort_by;
    if (params.with_genres) result['with_genres'] = params.with_genres;
    if (params.original_language) result['original_language'] = params.original_language;  // исправлено
    if (params.primary_release_year) result['first_air_date_year'] = String(params.primary_release_year);  // используется first_air_date_year
    if (params.page) result['page'] = String(params.page);

    return result;
}
