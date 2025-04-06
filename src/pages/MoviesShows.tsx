import {Hero} from "@/components/MoviesShows/Hero.tsx";
import {Movies} from "@/components/MoviesShows/Movies.tsx";
import {Shows} from "@/components/MoviesShows/Shows.tsx";

export const MoviesShows = () => {
    return (
        <>
            <div className='mt-12.5'>
                <Hero/>
            </div>
            <Movies/>

            <Shows/>
        </>
    );
};