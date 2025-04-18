import { TvShowCast } from "@/components/Show/TvShowCast";
import { TvShowDescription } from "@/components/Show/TvShowDescription";
import { TvShowHero } from "@/components/Show/TvShowHero";
import { TvShowSeasons } from "@/components/Show/TvShowSeasons";
import { TvShowSimilar } from "@/components/Show/TvShowSimilar";
import {TvShowReviews} from "@/components/Show/TvShowReviews.tsx";
import {TvShowStats} from "@/components/Show/TvShowStats.tsx";
import {useParams} from "react-router-dom";
import {useGetTvShowDetailsQuery} from "@/services/tmdb/tvShowApi.ts";

export const TvShow = () => {const { id } = useParams();
    const tvShowId = Number(id);

    const { data: tvShow, isLoading, error } = useGetTvShowDetailsQuery(id!);


    if (isLoading) return <div>Загрузка фильма...</div>;
    if (error) return <div>Ошибка загрузки данных</div>;

    return (
        <div className="flex flex-col gap-25">
            <TvShowHero tvShow={tvShow} />
            <div className="flex justify-between gap-5">
                <div className="flex flex-col max-w-[1057px] gap-7.5">
                    <TvShowSeasons />
                    <TvShowDescription overview={tvShow.overview} />
                    <TvShowCast />
                    <TvShowSimilar tvShowId={tvShowId}/>
                    <TvShowReviews tvShowId={tvShowId}/>
                </div>
                <div>
                    <TvShowStats tvShow={tvShow} tvShowId={tvShowId}/>
                </div>
            </div>
        </div>
    );
};