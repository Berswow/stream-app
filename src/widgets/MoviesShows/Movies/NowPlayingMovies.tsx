import {Clock3, Star} from "lucide-react";
import {MovieInterface} from "@/shared/interfaces/Movie/MovieBaseInterface.ts";
import {useGetNowPlayingMoviesQuery} from "@/services/tmdb/moviesApi.ts";

export const NowPlayingMovies = () => {
    const {data, isLoading, error} = useGetNowPlayingMoviesQuery(1)
    const movies = data?.results?.slice(0, 4) ?? [];

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки</div>;

    return (
        <div className='flex flex-col gap-12.5'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-3.5'>
                    <h2>Now Playing</h2>
                    <p style={{color: "var(--grey-60)"}}></p>
                </div>
                <div className='flex justify-between items-center self-end w-[257px] h-[88px] rounded-2xl p-4'
                     style={{backgroundColor: "var(--black-06)"}}>
                    <div className=' flex justify-center items-center w-[56px] h-[56px] rounded-2xl'
                         style={{backgroundColor: "var(--black-10)"}}>
                        <button>⇦</button>
                    </div>
                    <div className=' flex justify-center items-center w-[56px] h-[56px] rounded-2xl'
                         style={{backgroundColor: "var(--black-10)"}}>
                        <button>⇨</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-5'>
                {movies.map((movie: MovieInterface) => (
                    <div key={movie.id} className='flex flex-col items-center rounded-2xl p-5'
                         style={{backgroundColor: "var(--black-15)"}}>
                        <div className="relative rounded-2xl overflow-hidden">
                            <div className="flex">
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`Image ${movie.original_title}`}
                                className="rounded-lg object-cover" style={{width: '319px', height: '404px'}}/>
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>
                        </div>
                        <div className='flex justify-between w-full text-[16px] pt-5'>
                            <div className='flex gap-0.5 rounded-2xl p-1.5 bg-neutral-900'>
                                <Clock3/><p>1h 57min</p>
                            </div>
                            <div className='flex rounded-2xl p-1.5 bg-neutral-900 items-center'>
                                <Star size={20} className='fill-primary stroke-0'/><Star size={20} className='fill-primary stroke-0'/><Star size={20} className='fill-primary stroke-0'/><Star size={20} className='fill-primary stroke-0'/><Star size={20} className='fill-white stroke-0'/><p className='text-[14px] ml-1'>{Math.round(movie.vote_average * 10) / 10}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};