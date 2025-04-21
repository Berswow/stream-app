import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet"
import { Input } from "@/shared/ui/input"
import { ChangeEvent, useMemo, useState } from "react"
import { Film, Search, Tv, User } from "lucide-react"
import { useDispatch, useSelector } from "react-redux";
import { selectSearchToggle, setSearchToggle } from "@/redux/slices/uiSlice.ts";
import { useDebounce } from "@/shared/ui/SearchInput/useSearch.ts";
import { useGetFilteredSearchQuery } from "@/services/tmdb/filterApi.ts";
import { formatDateToYear } from "@/shared/lib/formatDate.ts";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../button";

const filters = [
    { label: "Movies", value: "movie", icon: <Film className="w-4 h-4" /> },
    { label: "TV Shows", value: "tv", icon: <Tv className="w-4 h-4" /> },
    { label: "People", value: "person", icon: <User className="w-4 h-4" /> },
]

export function SearchInput() {
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch()
    const [type, setType] = useState("movie")

    const modalState = useSelector(selectSearchToggle)

    const debouncedSearch = useDebounce(searchValue, 500);
    const isValidSearch = debouncedSearch.trim().length > 0;

    const { data, isLoading, error } = useGetFilteredSearchQuery(
        { query: debouncedSearch, page: 1, include_adult: false },
        { skip: !isValidSearch }
    );

    const searchResults = useMemo(() => data?.results.slice(0, 5) || [], [data]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleTitle = (result: { media_type: string; title?: string; name?: string }) => {
        if (result.media_type === "movie") return result.title;
        if (result.media_type === "tv" || result.media_type === "person") return result.name;
        return "Unknown";
    };

    const handleYear = (result: {
        media_type: string;
        release_date?: string;
        first_air_date?: string;
    }) => {
        if (result.media_type === "movie") return formatDateToYear(result.release_date ?? "");
        if (result.media_type === "tv") return formatDateToYear(result.first_air_date ?? "");
        return "Unknown";
    };

    const getMediaPath = (result: { media_type: string; title?: string; name?: string; id: number }) => {
        switch (result.media_type) {
            case "movie":
                return `/movies/${result.id}`;
            case "tv":
                return `/tvshow/${result.id}`;
            default:
                return "#";
        }
    }

    const handleResultClick = () => {
        dispatch(setSearchToggle(!modalState));
        setSearchValue("");
    };

    return (
        <Sheet open={modalState} onOpenChange={() => dispatch(setSearchToggle(!modalState))}>
            <SheetTrigger asChild>
                <Search className='cursor-pointer hover:text-red-600 transition-colors duration-300' size={30} />
            </SheetTrigger>

            {modalState && <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30" />}

            <SheetContent side="top"
                          className="flex flex-col items-center max-h-[100dvh] overflow-visible z-50 py-8 bg-neutral-800 border-none shadow-[0px_5px_10px_5px_#000000]">
                <div className="flex flex-col items-center gap-4 w-[500px] px-4">
                    <div className="flex justify-between gap-5">
                        {filters.map((f) => (
                            <Button
                                key={f.value}
                                variant={type === f.value ? "default" : "outline"}
                                onClick={() => setType(f.value)}
                                className={type === f.value ? `flex items-center gap-1 text-sm shadow-[0px_5px_10px_5px_#000000] transition-shadow duration-300` : `flex items-center gap-1 text-sm hover:shadow-[0px_5px_10px_5px_#000000] transition-shadow duration-300`}
                            >
                                {f.icon}
                                {f.label}
                            </Button>
                        ))}
                    </div>

                    <div className='flex items-center gap-3 self-start w-full'>
                        <Search size={30} />
                        <Input
                            value={searchValue}
                            onChange={handleSearch}
                            placeholder={`Search ${type}...`}
                            className="self-start h-14 font-bold border-none"
                        />
                    </div>

                    {isLoading && (
                        <div className="text-white mt-4">Loading...</div>
                    )}

                    {error && (
                        <div className="text-red-500 mt-4">Error</div>
                    )}

                    <AnimatePresence>
                        {searchResults.length > 0 && !isLoading && !error && (
                            <motion.ul
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col gap-3 py-2 self-start"
                            >
                                {searchResults.map((result) => (
                                    <Link
                                        to={getMediaPath(result)}
                                        onClick={handleResultClick}
                                        key={result.id}
                                    >
                                        <li
                                            className="flex items-center gap-2 p-3 text-nowrap cursor-pointer rounded-xl hover:shadow-[0px_5px_10px_5px_#000000] transition-shadow duration-300"
                                        >
                                            <Search size={15} /> {handleTitle(result)} <span>({handleYear(result)})</span>
                                        </li>
                                    </Link>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </SheetContent>
        </Sheet>
    )
}