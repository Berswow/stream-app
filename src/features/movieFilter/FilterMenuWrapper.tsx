import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useCallback } from "react";
import { FilterMenu } from "@/shared/ui/FilterMenu.tsx";
import { MOVIE_GENRES, TV_GENRES } from "@/shared/constants/genres.ts";
import { LANGUAGES } from "@/shared/constants/languages.ts";
import { YEARS } from "@/shared/constants/years.ts";
import { RootState } from "@/app/store.ts";
import {
    setMovieGenres,
    setMovieOriginalLanguage,
    setMovieReleaseDate,
    setMovieSort
} from "@/features/movieFilter/movieFilterSlice.ts";
import {
    setTvShowGenres,
    setTvShowOriginalLanguage,
    setTvShowReleaseDate,
    setTvShowSort
} from "@/features/tvShowFilter/tvShowFilterSlice.ts";

interface FilterMenuWrapperProps {
    type: "movie" | "tv";
    baseGenreId: number;
}

export const FilterMenuWrapper = ({ type, baseGenreId }: FilterMenuWrapperProps) => {
    const dispatch = useDispatch();

    const { genres, original_language, release_date, sort } = useSelector(
        (state: RootState) => state[type === "movie" ? "movieFilter" : "tvShowFilter"]
    );

    const selectedGenres = useMemo(() => genres || [], [genres]);

    useEffect(() => {
        if (!selectedGenres.includes(baseGenreId)) {
            dispatch(
                type === "movie"
                    ? setMovieGenres([baseGenreId, ...selectedGenres])
                    : setTvShowGenres([baseGenreId, ...selectedGenres])
            );
        }
    }, [baseGenreId, dispatch, selectedGenres, type]);

    const handleGenreChange = useCallback(
        (id: number) => {
            const updated = selectedGenres.includes(id)
                ? selectedGenres.filter((g) => g !== id)
                : [...selectedGenres, id];
            dispatch(type === "movie" ? setMovieGenres(updated) : setTvShowGenres(updated));
        },
        [dispatch, selectedGenres, type]
    );

    const handleLanguageChange = useCallback(
        (code: string) => {
            const updated = original_language.includes(code)
                ? original_language.filter((c) => c !== code)
                : [...original_language, code];
            dispatch(type === "movie" ? setMovieOriginalLanguage(updated) : setTvShowOriginalLanguage(updated));
        },
        [dispatch, original_language, type]
    );

    const handleYearChange = useCallback(
        (year: number) => {
            dispatch(type === "movie" ? setMovieReleaseDate(year) : setTvShowReleaseDate(year));
        },
        [dispatch, type]
    );

    const handleSortChange = useCallback(
        (value: string) => {
            dispatch(type === "movie" ? setMovieSort(value) : setTvShowSort(value));
        },
        [dispatch, type]
    );

    return (
        <FilterMenu
            genres={type === "movie" ? MOVIE_GENRES : TV_GENRES}
            selectedGenres={selectedGenres}
            onGenreChange={handleGenreChange}
            baseGenreId={baseGenreId}
            languages={LANGUAGES}
            selectedLanguages={original_language}
            onLanguageChange={handleLanguageChange}
            years={YEARS}
            selectedYear={release_date}
            onYearChange={handleYearChange}
            sort={sort}
            onSortChange={handleSortChange}
        />
    );
};
