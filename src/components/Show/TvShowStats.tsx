import {Calendar, LayoutGrid, Music, Star, Video} from "lucide-react";
import {formatDate} from "@/utils/formatDate.ts";
import { TvShowDetailed } from "@/Interface/Show/TvShowDetailInterface";
import {FC} from "react";
import {useGetTvShowCastQuery} from "@/services/tmdb/tvShowApi.ts";

interface TvShowStatsProps {
    tvShowId: number;
    tvShow: TvShowDetailed;
}

export const TvShowStats: FC<TvShowStatsProps> = ({tvShowId, tvShow}) => {
    const {data} = useGetTvShowCastQuery(tvShowId)

    const directors = data?.crew.directors;
    const producers = data?.crew.producers;

    return (
        <div className='flex flex-col max-w-[519px] rounded-xl p-12.5 gap-7.5'
             style={{backgroundColor: "var(--black-15)"}}>
            {/*Released Year*/}

            <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-1' style={{color: "var(--grey-60)"}}>
                    <Calendar size={24}/><h4 style={{color: "var(--grey-60)"}}>Released Date</h4>
                </div>
                <div>
                    <p>{formatDate(tvShow.first_air_date)}</p>
                </div>
            </div>


            {/*Ratings*/}

            <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-1' style={{color: "var(--grey-60)"}}>
                    <Star size={24}/><h4 style={{color: "var(--grey-60)"}}>Ratings</h4>
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-1 p-4 rounded-xl border border-neutral-700 flex-1/2'
                         style={{backgroundColor: "var(--black-08)"}}>
                        <p>IMDb</p>
                        <div className='flex'><Star className='fill-orange-600 stroke-0' size={24}/><Star
                            className='fill-orange-600 stroke-0' size={24}/><Star className='fill-orange-600 stroke-0'
                                                                                  size={24}/><Star
                            className='fill-orange-600 stroke-0' size={24}/><Star
                            className='fill-orange-600 stroke-0' size={24}/>4.5
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 p-4 rounded-xl border border-neutral-700 flex-1/2'
                         style={{backgroundColor: "var(--black-08)"}}>
                        <p>Streamvibe</p>
                        <div className='flex'><Star className='fill-orange-600 stroke-0' size={24}/><Star
                            className='fill-orange-600 stroke-0' size={24}/><Star className='fill-orange-600 stroke-0'
                                                                                  size={24}/><Star
                            className='fill-orange-600 stroke-0' size={24}/><Star
                            className='fill-neutral-400 stroke-0' size={24}/>4.1
                        </div>
                    </div>
                </div>
            </div>

            {/*Gernes*/}

            <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-1' style={{color: "var(--grey-60)"}}>
                    <LayoutGrid size={24}/><h4 style={{color: "var(--grey-60)"}}>Gernes</h4>
                </div>

                <div className='flex flex-wrap gap-2.5'>
                    {tvShow.genres.map(genre => (
                        <p key={genre.id} className='py-2 px-3.5 rounded-xl border border-neutral-700 text-center'
                           style={{backgroundColor: "var(--black-08)"}}>{genre.name}</p>
                    ))}
                </div>


            </div>

            {/*Director*/}

            <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-1' style={{color: "var(--grey-60)"}}>
                    <Video size={24}/><h4 style={{color: "var(--grey-60)"}}>Director</h4>
                </div>

                {directors?.map(director => (
                    <div key={director.id} className='flex gap-2.5 rounded-xl items-center p-3.5'
                         style={{backgroundColor: "var(--black-08)"}}>
                        <div className="w-[56px] h-[60px] rounded-xl overflow-hidden">
                            {director.profile_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w185${director.profile_path}`}
                                    alt={director.name}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-xs text-white">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col'>
                            <h4>{director.name}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/*Producer*/}

            <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-1' style={{color: "var(--grey-60)"}}>
                    <Music size={24}/><h4 style={{color: "var(--grey-60)"}}>Producer</h4>
                </div>
                {producers?.map(producer => (
                    <div key={producer.id} className='flex gap-2.5 rounded-xl items-center p-3.5'
                         style={{backgroundColor: "var(--black-08)"}}>
                        <div className="w-[56px] h-[60px] rounded-xl overflow-hidden">
                            {producer.profile_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w185${producer.profile_path}`}
                                    alt={producer.name}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-xs text-white">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col'>
                            <h4>{producer.name}</h4>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};