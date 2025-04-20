import { TvShowCast } from "@/widgets/TvShowDetails/TvShowCast.tsx";
import { TvShowDescription } from "@/widgets/TvShowDetails/TvShowDescription.tsx";
import { TvShowHero } from "@/widgets/TvShowDetails/TvShowHero.tsx";
import { TvShowSeasons } from "@/widgets/TvShowDetails/TvShowSeasons.tsx";
import { TvShowSimilar } from "@/widgets/TvShowDetails/TvShowSimilar.tsx";
import {TvShowReviews} from "@/widgets/TvShowDetails/TvShowReviews.tsx";
import {TvShowStats} from "@/widgets/TvShowDetails/TvShowStats.tsx";
import {useParams} from "react-router-dom";
import {useGetTvShowDetailsQuery} from "@/services/tmdb/tvShowApi.ts";

export const TvShow = () => {const { id } = useParams();
    const tvShowId = Number(id);

    const { data: tvShow, isLoading, error } = useGetTvShowDetailsQuery(id!);


    if (isLoading) return <div>Загрузка фильма...</div>;
    if (error) return <div>Ошибка загрузки данных</div>;

    if (!tvShow) return <div>Данные не найдены</div>;

    return (
        <div className="flex flex-col gap-25">
            <TvShowHero tvShow={tvShow} />
            <div className="flex justify-between gap-5">
                <div className="flex flex-col max-w-[1057px] gap-7.5">
                    <TvShowSeasons tvShowId={tvShowId} seasons={tvShow.seasons}/>
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