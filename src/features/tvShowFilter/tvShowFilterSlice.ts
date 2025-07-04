import { createFilterSlice, createFilterSelectors } from "@/shared/factory/createFilterSlice.ts";

const tvShowFilter = createFilterSlice("tvShowFilter");

export const {
    setGenres: setTvShowGenres,
    setOriginalLanguage: setTvShowOriginalLanguage,
    setReleaseDate: setTvShowReleaseDate,
    setSort: setTvShowSort
} = tvShowFilter.actions;

export const {
    selectGenres: selectTvShowGenresFilter,
    selectOriginalLanguage: selectTvShowOriginalLanguageFilter,
    selectReleaseDate: selectTvShowReleaseDateFilter,
    selectSort: selectTvShowSortFilter
} = createFilterSelectors("tvShowFilter");

export default tvShowFilter.reducer;