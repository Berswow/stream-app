import {Input} from "@/shared/ui/input";
import {Button} from "@/shared/ui/button";
import {ChangeEvent, useRef, useState} from "react";
import {useDebounce} from "@/shared/ui/SearchInput/useSearch";
import {useGetFilteredSearchQuery} from "@/services/tmdb/filterApi";
import {AnimatePresence, motion} from "framer-motion";
import {Loader2} from "lucide-react";
import {Link} from "react-router-dom";

export const SearchInput = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const debouncedSearch = useDebounce(searchValue, 1000);
    const containerRef = useRef(null);

    const isValidSearch = debouncedSearch.trim().length > 0;

    const {data, isLoading, error} = useGetFilteredSearchQuery(
        {query: debouncedSearch, page: 1, include_adult: false},
        {skip: !isValidSearch}
    );

    const searchResults = data?.results.slice(0, 5) || [];

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleTitle = (result: { media_type: string; title?: string; name?: string }) => {
        if (result.media_type === "movie") return result.title;
        if (result.media_type === "tv" || result.media_type === "person") return result.name;
        return "Unknown";
    };

    const handleResultClick = () => {
        setIsOpen(false);
        setSearchValue("");
    };

    return (
        <div className="relative w-full max-w-md" ref={containerRef}>
            <div className="flex items-center gap-2">
                <AnimatePresence initial={false}>
                    {isOpen ? (
                        <motion.div
                            key="input"
                            initial={{width: 0, opacity: 0}}
                            animate={{width: "100%", opacity: 1}}
                            exit={{width: 0, opacity: 0}}
                            transition={{duration: 0.3}}
                            className="relative w-full"
                        >
                            <Input
                                value={searchValue}
                                onChange={handleSearch}
                                autoFocus
                                className="w-full pr-10"
                            />
                            {searchValue && (
                                <button
                                    onClick={() => setSearchValue("")}
                                    className="absolute right-2 top-2 text-white"
                                >
                                    &times;
                                </button>
                            )}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="icon"
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.8}}
                            transition={{duration: 0.2}}
                        >
                            <Button onClick={() => setIsOpen(true)}>
                                <svg
                                    width="34"
                                    height="34"
                                    viewBox="0 0 34 34"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M29.75 29.75L22.388 22.388M22.388 22.388C24.3108 20.4653 25.5 17.809 25.5 14.875C25.5 9.00697 20.743 4.25 14.875 4.25C9.00697 4.25 4.25 9.00697 4.25 14.875C4.25 20.743 9.00697 25.5 14.875 25.5C17.809 25.5 20.4653 24.3108 22.388 22.388Z"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {isOpen && searchValue && (
                    <motion.div
                        key="dropdown"
                        initial={{opacity: 0, y: -5}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -5}}
                        transition={{duration: 0.2}}
                        className="absolute left-0 top-full z-10 mt-2 w-full rounded-xl bg-zinc-900 p-4 shadow-xl"
                    >
                        {isLoading && (
                            <div className="flex justify-center py-2 text-sm text-muted">
                                <Loader2 className="h-5 w-5 animate-spin"/>
                            </div>
                        )}

                        {error && (
                            <div className="py-2 text-sm text-red-500">Error loading results</div>
                        )}

                        {!isLoading && searchResults.length === 0 && (
                            <div className="py-2 text-sm text-muted">No results found</div>
                        )}

                        {searchResults.map((result) => (
                            <div
                                key={result.id}
                                className="cursor-pointer rounded-md p-2 hover:bg-zinc-800 transition"
                            >

                                <Link
                                    to={`/${result.media_type === 'tv' ? 'tvshow' : 'movies'}/${result.id}`}
                                    style={{backgroundColor: "var(--black-15)"}}
                                    onClick={handleResultClick}
                                >
                                    <p>{handleTitle(result)}</p>
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};