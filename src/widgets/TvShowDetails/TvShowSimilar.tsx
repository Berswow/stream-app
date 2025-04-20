import {useNavigate} from "react-router-dom";
import {useGetTvShowSimilarQuery} from "@/services/tmdb/tvShowApi.ts";
import {TvShowDetailed} from "@/shared/interfaces/Show/TvShowDetailInterface.ts";

type TvShowSimilarProps = {
    tvShowId: number;
};

export const TvShowSimilar = ({tvShowId}: TvShowSimilarProps) => {
    const navigate = useNavigate();

    const { data, isLoading, error } = useGetTvShowSimilarQuery(tvShowId)

    const shows = data?.slice(0, 6) ?? [];

    if (isLoading) return <div>Reviews downloading...</div>;
    if (error || !data) return <div>Ошибка загрузки данных</div>;

    return (
        <div className='flex flex-col rounded-xl p-12.5 gap-7.5' style={{backgroundColor: "var(--black-15)"}}>
            <h4 style={{ color: "var(--grey-60)" }}>Similar TvShows</h4>
            <div className='flex'>
                {shows.map((show: TvShowDetailed) => (
                    <div key={show.id} className='flex flex-col gap-2 items-center rounded-2xl cursor-pointer hover:bg-neutral-700 hover:text-white transition-all duration-300 p-3'
                         onClick={() => navigate(`/movies/${show.id}`)}>
                        <div className="relative rounded-2xl overflow-hidden">
                            <div className="flex">
                                <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={`Image ${show.name}`}
                                     className="rounded-lg object-cover" style={{width: '160px', height: '160px'}}/>
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>
                        </div>
                        <div>
                            <div className="text-sm text-white truncate max-w-[102px] p-1 bg-neutral-700 rounded-xl">{show.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};