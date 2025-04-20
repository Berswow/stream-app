import {useGetTvShowSeasonDetailsQuery} from "@/services/tmdb/tvShowApi.ts";
import {EpisodeSkeleton} from "@/shared/skeletons/EpisodeSkeleton.tsx";

interface TvShowEpisodeItemProps {
    tvShowId: number;
    seasonId: number;
}

export const TvShowEpisodeItem = ({tvShowId, seasonId}: TvShowEpisodeItemProps) => {
    const {data, isLoading, error} = useGetTvShowSeasonDetailsQuery({showId: tvShowId, seasonId})

    const episodes = data?.episodes || [];

    if (error) return <div>Ошибка загрузки данных</div>;

    if (isLoading) {
        return (
            <>
                {Array.from({ length: 3 }).map((_, i) => (
                    <EpisodeSkeleton key={i} />
                ))}
            </>
        );
    }

    return (
        <>
            {episodes.map((episode) => (
                <div key={episode.id} className='flex gap-5 items-center p-12.5 border-t-1 border-neutral-800'>
                    <h4 style={{color: "var(--grey-60)", fontSize: "30px"}}>{episode.episode_number}</h4>
                    <div className="w-[172px] h-[118px] bg-neutral-800 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center">
                        {episode.still_path ? (
                            <img
                                src={`https://image.tmdb.org/t/p/w300${episode.still_path}`}
                                alt={episode.name}
                                className="w-[172px] min-h-full object-cover"
                            />
                        ) : (
                            <div className="flex items-center justify-center w-full h-full text-xs text-white">
                                No Image
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col w-full gap-3.5'>
                        <div className='flex justify-between'>
                            <p>{episode.name}</p>
                            <p>{episode.runtime}</p>
                        </div>
                        <div>
                            <p>
                                {episode.overview}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};