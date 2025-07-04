import { createFilterSlice, createFilterSelectors } from "@/shared/factory/createFilterSlice.ts";

const movieFilter = createFilterSlice("movieFilter");

export const {
    setGenres: setMovieGenres,
    setOriginalLanguage: setMovieOriginalLanguage,
    setReleaseDate: setMovieReleaseDate,
    setSort: setMovieSort
} = movieFilter.actions;

export const {
    selectGenres: selectMovieGenresFilter,
    selectOriginalLanguage: selectMovieOriginalLanguageFilter,
    selectReleaseDate: selectMovieReleaseDateFilter,
    selectSort: selectMovieSortFilter
} = createFilterSelectors("movieFilter");

export default movieFilter.reducer;