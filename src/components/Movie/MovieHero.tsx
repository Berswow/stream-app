import {Button} from "@/components/ui/button.tsx";
import {Play, Plus, ThumbsUp, Volume2} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card.tsx";
import {MovieDetailed} from "@/Interface/Movie/MovieDetailInterface.ts";

interface MovieHeroProps {
    movie: MovieDetailed;
}

export const MovieHero = ({movie}: MovieHeroProps) => {
    return (
        <>

            {/**********************************************************************/}


            <section className="relative w-full h-[835px] rounded-2xl overflow-hidden">
                <div className="w-full h-full">
                    <div className="h-full object-cover">
                        <div key={movie.id} className="w-full h-full">
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
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 flex flex-col items-center p-12.5 w-full">
                    <div className='flex flex-col items-center gap-12.5 max-w-[800px] text-center'>
                        <h2 className='text-[38px] font-bold'>
                            {movie.title || "Loading..."}
                        </h2>
                        <p className="text-gray-400">
                            {movie.overview || "Loading..."}
                        </p>
                        <div className='flex gap-5'>
                            <Button className='h-[56px]'>
                                <Play fill="white" stroke="white"/> Play Now
                            </Button>
                            <Button variant='outline' className='h-[56px] w-[56px] text-white'>
                                <Plus/>
                            </Button>
                            <Button variant='outline' className='h-[56px] w-[56px] text-white'>
                                <ThumbsUp/>
                            </Button>
                            <Button variant='outline' className='h-[56px] w-[56px] text-white'>
                                <Volume2/>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

