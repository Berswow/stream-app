import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import { LANGUAGES } from "@/constants/languages";
import {Button} from "@/components/ui/button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {
    selectGenresFilter,
    selectOriginalLanguageFilter,
    selectReleaseDateFilter,
    selectSortFilter, setGenres, setOriginalLanguage,
    setReleaseDate,
    setSort
} from "@/redux/slices/filterSlice.ts";
import {GENRES} from "@/constants/genres.ts";

const years = [2025, 2024, 2023, 2022, 2021, 2020];

export const DropMenu = () => {
    const dispatch = useDispatch()

    const sortValue = useSelector(selectSortFilter)
    const releasedDateValue = useSelector(selectReleaseDateFilter)
    const originalLanguageValue = useSelector(selectOriginalLanguageFilter)
    const selectedGenres = useSelector(selectGenresFilter)

    console.log(selectedGenres)

    const handleLanguageChange = (code: string) => {
        let updated;
        if (originalLanguageValue?.includes(code)) {
            updated = originalLanguageValue.filter(c => c !== code);
        } else {
            updated = [...originalLanguageValue, code];
        }
        dispatch(setOriginalLanguage(updated));
    };

    const handleReleaseDateChange = (year: number) => {
        let newYears;

        if (releasedDateValue?.includes(year)) {
            newYears = releasedDateValue.filter(y => y !== year);
        } else {
            newYears = [...(releasedDateValue || []), year];
        }

        dispatch(setReleaseDate(newYears.length > 0 ? newYears : []));
    };

    const handleSortChange = (value: string) => {
        dispatch(setSort(value));
    };

    const handleGenreChange = (id: number) => {
        const updated = selectedGenres.includes(id)
            ? selectedGenres.filter(g => g !== id)
            : [...selectedGenres, id];

        dispatch(setGenres(updated));
    };

    const getSortTitle = (value: string) => {
        switch (value) {
            case "popularity.desc":
                return "Popularity";
            case "primary_release_date.desc":
                return "Release Date";
            default:
                return "Sort by";
        }
    };

    return (
        <div className='grid grid-cols-4 grid-rows-1 gap-4'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' className='p-5 rounded-xl'>Genres</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Choose genres</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {GENRES.map(({ id, name }) => (
                        <DropdownMenuCheckboxItem
                            key={id}
                            checked={selectedGenres.includes(id)}
                            onCheckedChange={() => handleGenreChange(Number(id))}
                        >
                            {name}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' className='p-5 rounded-xl'>Language</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Choose language</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {LANGUAGES.map(({ code, name, flag }) => (
                        <DropdownMenuCheckboxItem
                            key={code}
                            checked={(originalLanguageValue)?.includes(code)}
                            onCheckedChange={() => handleLanguageChange(code)}
                        >
                            <span className="mr-2">{flag}</span> {name}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' className='p-5 rounded-xl'>Released date</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Choose year</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {years.map(year => (
                        <DropdownMenuCheckboxItem
                            key={year}
                            checked={releasedDateValue?.includes(year) || false}
                            onCheckedChange={() => handleReleaseDateChange(year)}
                        >
                            {year}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' className='p-5 rounded-xl'>
                        {getSortTitle(sortValue)}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Choose sort</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuRadioGroup value={sortValue} onValueChange={handleSortChange}>
                        <DropdownMenuRadioItem value="popularity.desc">Popularity</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="primary_release_date.desc">Release Date</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>


        </div>
    );
};
