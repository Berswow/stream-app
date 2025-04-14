import { useDispatch, useSelector } from "react-redux";
import {
    selectGenresFilter,
    selectOriginalLanguageFilter,
    selectReleaseDateFilter,
    selectSortFilter,
    setGenres,
    setOriginalLanguage,
    setReleaseDate,
    setSort
} from "@/redux/slices/filterSlice";
import {MOVIE_GENRES} from "@/constants/genres";
import { LANGUAGES } from "@/constants/languages";
import { YEARS } from "@/constants/years";
import { FilterMenu } from "@/components/shared/FilterMenu";
import {useEffect, useMemo} from "react";

interface MovieFilterMenuProps {
    baseGenreId: number;
}

export const MovieFilterMenu = ({ baseGenreId }: MovieFilterMenuProps) => {
    const dispatch = useDispatch();

    const sortValue = useSelector(selectSortFilter);
    const releasedDateValue = useSelector(selectReleaseDateFilter);
    const originalLanguageValue = useSelector(selectOriginalLanguageFilter) || [];
    const rawSelectedGenres = useSelector(selectGenresFilter);
    const selectedGenres = useMemo(() => rawSelectedGenres || [], [rawSelectedGenres]);

    useEffect(() => {
        if (!selectedGenres.includes(baseGenreId)) {
            dispatch(setGenres([baseGenreId, ...selectedGenres]));
        }
    }, [baseGenreId, selectedGenres, dispatch]);

    const handleLanguageChange = (code: string) => {
        const updated = originalLanguageValue.includes(code)
            ? originalLanguageValue.filter(c => c !== code)
            : [...originalLanguageValue, code];

        dispatch(setOriginalLanguage(updated));
    };

    const handleReleaseDateChange = (year: number) => {
        dispatch(setReleaseDate(year));
    };

    const handleSortChange = (value: string) => {
        dispatch(setSort(value));
    };

    const handleGenreChange = (id: number) => {
        if (id === baseGenreId) return;

        const updated = selectedGenres.includes(id)
            ? selectedGenres.filter(g => g !== id)
            : [...selectedGenres, id];

        dispatch(setGenres(updated));
    };

    return (
        <FilterMenu
            genres={MOVIE_GENRES}
            selectedGenres={selectedGenres}
            onGenreChange={handleGenreChange}
            baseGenreId={baseGenreId}

            languages={LANGUAGES}
            selectedLanguages={originalLanguageValue}
            onLanguageChange={handleLanguageChange}

            years={YEARS}
            selectedYear={releasedDateValue}
            onYearChange={handleReleaseDateChange}

            sort={sortValue}
            onSortChange={handleSortChange}
        />
    );
};
