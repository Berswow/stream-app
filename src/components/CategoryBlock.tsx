import { Play } from "lucide-react";
import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious
} from "./ui/pagination";
import { motion, AnimatePresence } from "framer-motion";
import {useNavigate} from "react-router-dom";
import {MOVIE_GENRES} from "@/constants/genres.ts";
import {useDispatch} from "react-redux";
import {setClearGenres, setGenres} from "@/redux/slices/filterSlice.ts";

type CategoryBlockProps<T> = {
    title: string;
    description?: string;
    genres: string[];
    genreMap: Record<string, T[]>;
    getId: (item: T) => string | number;
    getImage: (item: T) => string;
    getTitle: (item: T) => string;
};

export const CategoryBlock = <T,>({
                                      title,
                                      description,
                                      genres,
                                      genreMap,
                                      getId,
                                      getImage,
                                      getTitle,
                                  }: CategoryBlockProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const genresPerPage = 5;
    const totalPages = Math.ceil(genres.length / genresPerPage);

    const paginatedGenres = genres.slice(
        (currentPage - 1) * genresPerPage,
        currentPage * genresPerPage
    );

    const handlePrevious = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };



    return (
        <section className="flex flex-col gap-10">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-3.5">
                    <h2>{title}</h2>
                    {description && <p style={{ color: "var(--grey-60)" }}>{description}</p>}
                </div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious onClick={handlePrevious}/>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext onClick={handleNext}  />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-5 gap-7.5"
                >
                    {paginatedGenres.map((genre) => {
                        const items = genreMap[genre] || [];

                        return (
                            <div
                                key={genre}
                                className="flex flex-col items-center rounded-2xl p-8"
                                style={{ backgroundColor: "var(--black-15)" }}
                                onClick={() => {
                                    const matched = MOVIE_GENRES.find((g) => g.name === genre);
                                    if (matched) {
                                        dispatch(setClearGenres()); // очищаем жанры
                                        dispatch(setGenres([matched.id])); // устанавливаем новый жанр
                                        navigate(`/movies/genre/${matched.id}`);
                                    }
                                }}
                            >
                                <div className="relative rounded-2xl overflow-hidden">
                                    <div className="grid grid-cols-2 grid-rows-2 gap-1.5">
                                        {items.slice(0, 4).map((item) => (
                                            <img
                                                key={getId(item)}
                                                src={getImage(item)}
                                                alt={getTitle(item)}
                                                className="rounded-lg object-cover"
                                                style={{ width: "105px", height: "123px" }}
                                            />
                                        ))}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </div>
                                <div className="flex flex-col w-full">
                                    <div className="flex mt-2 justify-between items-center w-full">
                                        <p className="block">{genre}</p>
                                        <Play fill="white" stroke="white" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </AnimatePresence>
        </section>
    );
};
