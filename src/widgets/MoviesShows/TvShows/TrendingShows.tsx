import {Clock3, Eye} from "lucide-react";
import { useGetTrendingTVQuery} from "@/services/tmdb/tvShowApi.ts";
import {TvShowInterface} from "@/shared/interfaces/Show/TvShowBaseInterface.ts";

export const TrendingShows = () => {
    const {data, isLoading, error} = useGetTrendingTVQuery(1)
    const shows = data?.results?.slice(0, 4) ?? [];

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка загрузки</div>;

    return (
        <div className='flex flex-col gap-12.5'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-3.5'>
                    <h2>Trending Shows Now</h2>
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
            <div className='flex justify-between gap-7.5'>
                {shows.map((show: TvShowInterface) => (
                    <div key={show.id} className='flex flex-col items-center rounded-2xl p-5'
                         style={{backgroundColor: "var(--black-15)"}}>
                        <div className="relative rounded-2xl overflow-hidden">
                            <div className="flex">
                                <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                                     alt={`Image ${show.original_name}`} className="rounded-lg object-cover"
                                     style={{width: '320px', height: '404px'}}/>
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>
                        </div>
                        <div className='flex justify-between w-full text-[16px] pt-5'>
                            <div className='flex gap-0.5 rounded-2xl p-1.5 bg-neutral-900'>
                                <Clock3/><p>1h 30min</p>
                            </div>
                            <div className='flex gap 0.5 rounded-2xl p-1.5 bg-neutral-900'>
                                <Eye/><p>2K</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};