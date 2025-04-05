import {useCallback, useEffect, useRef, useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Play, Plus, ThumbsUp, Volume2} from "lucide-react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel.tsx";
import Autoplay from "embla-carousel-autoplay";
import {Card, CardContent} from "@/components/ui/card.tsx";
import type {EmblaCarouselType} from 'embla-carousel';

const images = import.meta.glob<{ default: string }>(
    "../../assets/MoviesShows/*.{png,jpg,jpeg,svg}",
    {eager: true}
);
const imagesArray = Object.values(images).map((img) => img.default);

const movies = [
    {
        id: 1,
        name: 'Spider-Man: Homecoming',
        description: 'Thrilled by his experience with the Avengers, young Peter Parker returns home to live with his Aunt May'
    },
    {
        id: 2,
        name: 'Deadpool & Wolverine',
        description: 'Deadpool works with a reluctant Wolverine from another universe to stop the Time Variance Authority from destroying his own universe'
    },
    {
        id: 3,
        name: 'Avengers: Endgame',
        description: 'With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.'
    },
    {
        id: 4,
        name: 'Batman v Superman: Dawn of Justice',
        description: 'Convinced that Superman is now a threat to humanity, Batman embarks on a personal vendetta to end his reign on Earth, while the conniving Lex Luthor launches his own crusade against the Man of Steel'
    }
];

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const emblaRef = useRef<EmblaCarouselType | undefined>(undefined);
    const [emblaReady, setEmblaReady] = useState(false);

    const onSelect = useCallback(() => {
        if (!emblaRef.current) return;
        const index = emblaRef.current.selectedScrollSnap();
        setCurrentSlide(index);
    }, []);

    useEffect(() => {
        if (!emblaRef.current || !emblaReady) return;
        onSelect(); // инициализация
        emblaRef.current.on("select", onSelect); // слушаем изменения
    }, [emblaReady, onSelect]);

    return (
        <section className="relative w-full h-[835px] overflow-hidden">
            <Carousel
                className="w-full h-full"
                plugins={[Autoplay({delay: 4000})]}
                opts={{loop: true}}
                setApi={(api) => {
                    emblaRef.current = api;
                    setEmblaReady(true); // установка флага готовности
                }}
            >
                <CarouselContent className="h-full object-cover">
                    {imagesArray.map((image, index) => (
                        <CarouselItem key={index} className="w-full h-full">
                            <Card className="w-full h-full border-none">
                                <CardContent className="relative w-full h-full p-0">
                                    <img
                                        src={image}
                                        alt={`Slide ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/60 to-transparent"/>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>

            <div className="absolute bottom-0 left-0 flex flex-col items-center p-12.5 w-full">
                <div className='flex flex-col items-center gap-12.5 max-w-[800px] text-center'>
                    <h2 className='text-[38px] font-bold'>{movies[currentSlide]?.name || "Loading..."}</h2>
                    <p className="text-gray-400">
                        {movies[currentSlide]?.description || "Loading..."}
                    </p>
                    <div className='flex gap-5'>
                        <Button className='h-[56px]'><Play fill="white" stroke="white"/> Play Now</Button>
                        <Button variant='outline' className='h-[56px] w-[56px] text-white'><Plus/></Button>
                        <Button variant='outline' className='h-[56px] w-[56px] text-white'><ThumbsUp/></Button>
                        <Button variant='outline' className='h-[56px] w-[56px] text-white'><Volume2/></Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
