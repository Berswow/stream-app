import {MovieHero} from "@/components/Movie/MovieHero.tsx";
import {MovieDescription} from "@/components/Movie/MovieDescription.tsx";
import {MovieCast} from "@/components/Movie/MovieCast.tsx";
import {MovieReviews} from "@/components/Movie/MovieReviews.tsx";
import {MovieStats} from "@/components/Movie/MovieStats.tsx";

export const Movie = () => {
    return (
        <div className='flex flex-col gap-25'>
            <MovieHero/>
            <div className='flex justify-between gap-5'>
                <div className='flex flex-col max-w-[1057px] gap-7.5'>
                    <MovieDescription/>
                    <MovieCast/>
                    <MovieReviews/>
                </div>
                <div className='w-full'>
                    <MovieStats/>
                </div>
            </div>
        </div>
    );
};