import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Play, Plus, ThumbsUp, Volume2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel.tsx";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card.tsx";
import type { EmblaCarouselType } from 'embla-carousel';
import {useGetMovieTrailerQuery, useGetPopularMoviesQuery} from "@/services/tmdb/moviesApi.ts";
import { MovieInterface } from "@/Interface/Movie/MovieBaseInterface.ts";
import {TrailerModal} from "@/components/TrailerModal.tsx";

export const Hero = () => {
    const autoplayRef = useRef<any>(Autoplay({ delay: 4000 }));
    const [currentSlide, setCurrentSlide] = useState(0);
    const [trailerKey, setTrailerKey] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const emblaRef = useRef<EmblaCarouselType | undefined>(undefined);
    const [emblaReady, setEmblaReady] = useState(false);

    const { data: popularMovies, isLoading: isLoadingPopular, error: errorPopular } = useGetPopularMoviesQuery(1);
    const moviesList = (popularMovies || []).slice(0, 5);
    const currentMovie: MovieInterface = moviesList[currentSlide] || {};

    const { data: MovieTrailer } = useGetMovieTrailerQuery(currentMovie.id, {
        skip: !currentMovie?.id,
    });

    useEffect(() => {
        setTrailerKey(MovieTrailer ?? null)
    }, [MovieTrailer])


    const onSelect = useCallback(() => {
        if (!emblaRef.current) return;
        const index = emblaRef.current.selectedScrollSnap();
        setCurrentSlide(index);
    }, []);

    useEffect(() => {
        if (!emblaRef.current || !emblaReady) return;
        onSelect(); // Инициализация
        emblaRef.current.on("select", onSelect); // Слушаем изменения слайда
    }, [emblaReady, onSelect]);

    useEffect(() => {
        if (!emblaRef.current) return;
        const autoplay = autoplayRef.current;

        if (isModalOpen) {
            autoplay?.stop?.();
        } else {
            autoplay?.play?.();
        }
    }, [isModalOpen]);


    if (isLoadingPopular) return <div>Загрузка...</div>;
    if (errorPopular) return <div>Ошибка загрузки</div>;

    return (
        <section className="relative w-full h-[835px] rounded-2xl overflow-hidden">
            <Carousel
                className="w-full h-full"
                plugins={[autoplayRef.current]}
                opts={{ loop: true }}
                setApi={(api) => {
                    emblaRef.current = api;
                    setEmblaReady(true);
                }}
            >
                <CarouselContent className="h-full object-cover">
                    {moviesList.map((movie: MovieInterface) => (
                        <CarouselItem key={movie.id} className="w-full h-full">
                            <Card className="w-full h-full border-none">
                                <CardContent className="relative w-full h-full p-0">
                                    <img
                                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                        alt={`Slide ${movie.title}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="absolute bottom-0 left-0 flex flex-col items-center p-12.5 w-full">
                <div className='flex flex-col items-center gap-12.5 max-w-[800px] text-center'>
                    <h2 className='text-[38px] font-bold'>
                        {currentMovie.title || "Loading..."}
                    </h2>
                    <p className="text-gray-400">
                        {currentMovie.overview || "Loading..."}
                    </p>
                    <div className='flex gap-5'>
                        <Button className='h-[56px]' onClick={() => setIsModalOpen(true)}>
                            <Play fill="white" stroke="white" /> Play Now
                        </Button>
                        <Button variant='outline' className='h-[56px] w-[56px] text-white'>
                            <Plus />
                        </Button>
                        <Button variant='outline' className='h-[56px] w-[56px] text-white'>
                            <ThumbsUp />
                        </Button>
                        <Button variant='outline' className='h-[56px] w-[56px] text-white'>
                            <Volume2 />
                        </Button>
                    </div>
                </div>
            </div>
            <TrailerModal
                trailerKey={trailerKey}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};
