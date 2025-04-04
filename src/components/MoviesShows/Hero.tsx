import { Button } from "@/components/ui/button.tsx";
import { Play, Plus, ThumbsUp, Volume2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel.tsx";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card.tsx";

const images = import.meta.glob<{ default: string }>(
    "../../assets/MoviesShows/*.{png,jpg,jpeg,svg}",
    { eager: true }
);
const imagesArray = Object.values(images).map((img) => img.default);

export const Hero = () => {
    return (
        <section className="relative w-full h-[835px] overflow-hidden">
            <Carousel
                className="w-full h-full"
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
            >
                <CarouselContent className="h-fullobject-cove">
                    {imagesArray.map((image, index) => (
                        <CarouselItem key={index} className="w-full h-full">
                            <Card className="w-full h-full border-none">
                                <CardContent className="relative w-full h-full p-0">
                                    {/* Фикс: 100% высота для картинки */}
                                    <img
                                        src={image}
                                        alt={`Slide ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Затемнение */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* Контент (теперь центрируется правильно) */}
            <div className="absolute bottom-0 left-0 flex flex-col items-center p-12.5 w-full">
                <div className='flex flex-col items-center gap-12.5 text-white max-w-[800px] text-center'>
                    <h2 className='text-[38px] font-bold'>Avengers : Endgame</h2>
                    <p className="text-gray-300">
                        With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos's actions and restore the universe, no matter the consequences.
                    </p>
                    <div className='flex gap-5'>
                        <Button className='h-[56px] bg-white text-black'><Play /> Play Now</Button>
                        <Button variant='outline' className='h-[56px] w-[56px] text-white'><Plus /></Button>
                        <Button variant='outline' className='h-[56px] w-[56px] text-white'><ThumbsUp /></Button>
                        <Button variant='outline' className='h-[56px] w-[56px] text-white'><Volume2 /></Button>
                    </div>
                </div>
                <div>pagination</div>
            </div>
        </section>
    );
};
