import { Play } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MOVIE_GENRES, TV_GENRES } from "@/constants/genres.ts"; // Предполагаем, что у тебя есть константы для жанров фильмов и сериалов
import { useDispatch } from "react-redux";
import {setClearAllFilters, setGenres} from "@/redux/slices/filterSlice.ts";

type CategoryBlockProps<T> = {
    title: string;
    description?: string;
    genres: string[];
    genreMap: Record<string, T[]>;
    getId: (item: T) => string | number;
    getImage: (item: T) => string;
    getTitle: (item: T) => string;
    contentType: 'movie' | 'tv'; // Добавляем contentType
};

export const CategoryBlock = <T,>({
                                      title,
                                      description,
                                      genres,
                                      genreMap,
                                      getId,
                                      getImage,
                                      getTitle,
                                      contentType, // Получаем contentType
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

    const handleGenreClick = (genre: string) => {
        const matched = (contentType === 'movie' ? MOVIE_GENRES : TV_GENRES).find(
            (g) => g.name === genre
        );

        if (matched) {
            dispatch(setClearAllFilters());
            dispatch(setGenres([matched.id]));
            navigate(`/${contentType}/genre/${matched.id}`); // Динамический путь в зависимости от контента
        }
    };

    return (
        <section className="flex flex-col gap-10">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3.5">
                    <h2>{title}</h2>
                    {description && <p style={{ color: "var(--grey-60)" }}>{description}</p>}
                </div>

                <div
                    className="flex justify-between items-center self-end w-[257px] h-[88px] rounded-2xl p-4"
                    style={{ backgroundColor: "var(--black-06)" }}
                >
                    <div
                        className=" flex justify-center items-center w-[56px] h-[56px] rounded-2xl cursor-pointer bg-neutral-800 hover:bg-neutral-600 transition-colors duration-300"
                        onClick={handlePrevious}
                    >
                        <button>⇦</button>
                    </div>
                    <div
                        className=" flex justify-center items-center w-[56px] h-[56px] rounded-2xl cursor-pointer bg-neutral-800 hover:bg-neutral-600 transition-colors duration-300"
                        onClick={handleNext}
                    >
                        <button>⇨</button>
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-5 gap-7.5"
                >
                    {paginatedGenres.map((genre) => {
                        const items = genreMap[genre] || [];

                        return (
                            <div
                                key={genre}
                                className="flex flex-col items-center rounded-2xl p-8 bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
                                onClick={() => handleGenreClick(genre)}
                            >
                                <div className="relative rounded-2xl overflow-hidden">
                                    <div className="grid grid-cols-2 grid-rows-2">
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
