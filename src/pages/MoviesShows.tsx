import {Hero} from "@/components/MoviesShows/Hero.tsx";
import {Movies} from "@/components/MoviesShows/Movies.tsx";
import {Shows} from "@/components/MoviesShows/Shows.tsx";

export const MoviesShows = () => {
    return (
        <>
            <div>
                <Hero/>
            </div>
            <div className='mt-25'>

            <Movies/>
            <Shows/>
            </div>
        </>
    );
};