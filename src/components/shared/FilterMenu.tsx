import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface Genre {
    id: number;
    name: string;
}

interface Language {
    code: string;
    name: string;
    flag: string;
}

interface FilterMenuProps {
    genres: Genre[];
    selectedGenres: number[];
    onGenreChange: (id: number) => void;
    baseGenreId?: number;

    languages: Language[];
    selectedLanguages: string[];
    onLanguageChange: (code: string) => void;

    years: number[];
    selectedYears: number[];
    onYearChange: (year: number) => void;

    sort: string;
    onSortChange: (value: string) => void;
}

export const FilterMenu = ({
                               genres,
                               selectedGenres,
                               onGenreChange,
                               baseGenreId,

                               languages,
                               selectedLanguages,
                               onLanguageChange,

                               years,
                               selectedYears,
                               onYearChange,

                               sort,
                               onSortChange
                           }: FilterMenuProps) => {


    const normalizedGenres = baseGenreId && !selectedGenres.includes(baseGenreId)
        ? [...selectedGenres, baseGenreId]
        : selectedGenres;

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
        <div className='grid grid-cols-4 gap-4'>
            {/* GenrePage */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' className='p-5 rounded-xl'>Genres</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Choose genres</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {genres.map(({ id, name }) => (
                        <DropdownMenuCheckboxItem
                            key={id}
                            checked={normalizedGenres.includes(id)}
                            onCheckedChange={() => onGenreChange(id)}
                            disabled={id === baseGenreId}
                        >
                            {name} {id === baseGenreId && "🔒"}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Language */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' className='p-5 rounded-xl'>Language</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Choose language</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {languages.map(({ code, name, flag }) => (
                        <DropdownMenuCheckboxItem
                            key={code}
                            checked={selectedLanguages.includes(code)}
                            onCheckedChange={() => onLanguageChange(code)}
                        >
                            <span className="mr-2">{flag}</span> {name}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Year */}
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
                            checked={selectedYears.includes(year)}
                            onCheckedChange={() => onYearChange(year)}
                        >
                            {year}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Sort */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' className='p-5 rounded-xl'>
                        {getSortTitle(sort)}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Choose sort</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={sort} onValueChange={onSortChange}>
                        <DropdownMenuRadioItem value="popularity.desc">Popularity</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="primary_release_date.desc">Release Date</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};
