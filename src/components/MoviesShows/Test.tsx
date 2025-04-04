import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const images = import.meta.glob<{ default: string }>(
    "../../assets/MoviesShows/*.{png,jpg,jpeg,svg}",
    { eager: true }
);
const imagesArray = Object.values(images).map((img) => img.default);

export const Test = () => {
    return (
        <div>
            <Carousel
                className="w-full max-w-none"
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
            >
                <CarouselContent>
                    {imagesArray.map((image, index) => (
                        <CarouselItem key={index} className="w-full">
                            <Card className="w-full h-[835px] border-none">
                                <CardContent className="flex items-center justify-center w-full h-full p-0">
                                    <img
                                        src={image}
                                        alt={`Slide ${index}`}
                                        className="w-full h-full object-cover"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};
