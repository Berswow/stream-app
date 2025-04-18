// import { useDispatch, useSelector } from "react-redux";
// import {
//     selectGenresFilter,
//     selectOriginalLanguageFilter,
//     selectReleaseDateFilter,
//     selectSortFilter,
//     setGenres,
//     setOriginalLanguage,
//     setReleaseDate,
//     setSort
// } from "@/redux/slices/filterSlice.ts";
// import {TV_GENRES} from "@/constants/genres.ts";
// import { LANGUAGES } from "@/constants/languages.ts";
// import { YEARS } from "@/constants/years.ts";
// import { FilterMenu } from "@/components/shared/FilterMenu.tsx";
//
// interface TvFilterMenuProps {
//     baseGenreId: number;
// }
//
// export const TvFilterMenu = ({ baseGenreId }: TvFilterMenuProps) => {
//     const dispatch = useDispatch();
//
//     const sortValue = useSelector(selectSortFilter);
//     const releasedDateValue = useSelector(selectReleaseDateFilter) || [];
//     const originalLanguageValue = useSelector(selectOriginalLanguageFilter) || [];
//     const selectedGenres = useSelector(selectGenresFilter) || [];
//
//     const handleLanguageChange = (code: string) => {
//         const updated = originalLanguageValue.includes(code)
//             ? originalLanguageValue.filter(c => c !== code)
//             : [...originalLanguageValue, code];
//
//         dispatch(setOriginalLanguage(updated));
//     };
//
//     const handleReleaseDateChange = (year: number) => {
//         const updated = releasedDateValue.includes(year)
//             ? releasedDateValue.filter(y => y !== year)
//             : [...releasedDateValue, year];
//
//         dispatch(setReleaseDate(updated));
//     };
//
//     const handleSortChange = (value: string) => {
//         dispatch(setSort(value));
//     };
//
//     const handleGenreChange = (id: number) => {
//         if (id === baseGenreId) return;
//
//         const updated = selectedGenres.includes(id)
//             ? selectedGenres.filter(g => g !== id)
//             : [...selectedGenres, id];
//
//         dispatch(setGenres(updated));
//     };
//
//     return (
//         <FilterMenu
//             genres={TV_GENRES}
//             selectedGenres={selectedGenres}
//             onGenreChange={handleGenreChange}
//             baseGenreId={baseGenreId}
//
//             languages={LANGUAGES}
//             selectedLanguages={originalLanguageValue}
//             onLanguageChange={handleLanguageChange}
//
//             years={YEARS}
//             selectedYears={releasedDateValue}
//             onYearChange={handleReleaseDateChange}
//
//             sort={sortValue}
//             onSortChange={handleSortChange}
//         />
//     );
// };
