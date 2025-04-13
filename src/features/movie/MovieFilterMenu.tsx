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
import { GENRES } from "@/constants/genres";
import { LANGUAGES } from "@/constants/languages";
import { YEARS } from "@/constants/years";
import { FilterMenu } from "@/components/shared/FilterMenu";

interface MovieFilterMenuProps {
    baseGenreId: number;
}

export const MovieFilterMenu = ({ baseGenreId }: MovieFilterMenuProps) => {
    const dispatch = useDispatch();

    const sortValue = useSelector(selectSortFilter);
    const releasedDateValue = useSelector(selectReleaseDateFilter) || [];
    const originalLanguageValue = useSelector(selectOriginalLanguageFilter) || [];
    const selectedGenres = useSelector(selectGenresFilter) || [];

    const handleLanguageChange = (code: string) => {
        const updated = originalLanguageValue.includes(code)
            ? originalLanguageValue.filter(c => c !== code)
            : [...originalLanguageValue, code];

        dispatch(setOriginalLanguage(updated));
    };

    const handleReleaseDateChange = (year: number) => {
        const updated = releasedDateValue.includes(year)
            ? releasedDateValue.filter(y => y !== year)
            : [...releasedDateValue, year];

        dispatch(setReleaseDate(updated));
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
            genres={GENRES}
            selectedGenres={selectedGenres}
            onGenreChange={handleGenreChange}
            baseGenreId={baseGenreId}

            languages={LANGUAGES}
            selectedLanguages={originalLanguageValue}
            onLanguageChange={handleLanguageChange}

            years={YEARS}
            selectedYears={releasedDateValue}
            onYearChange={handleReleaseDateChange}

            sort={sortValue}
            onSortChange={handleSortChange}
        />
    );
};
