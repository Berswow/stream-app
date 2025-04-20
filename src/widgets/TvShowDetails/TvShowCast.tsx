import {CastMember} from "@/shared/interfaces/Movie/MovieCastInerface.ts";
import {useParams} from "react-router-dom";
import {useGetTvShowCastQuery} from "@/services/tmdb/tvShowApi.ts";

export const TvShowCast = () => {
    const { id } = useParams();
    const { data: tvShowCredits, isLoading, error} = useGetTvShowCastQuery(id!)

    const cast = tvShowCredits?.cast || [];

    if (isLoading) return <div>Загрузка актёров...</div>;
    if (error || !cast) return <div>Ошибка загрузки актёров</div>;

    return (
        <div
            className="flex flex-col max-w-[1057px] w-full rounded-xl p-12.5 gap-7.5"
            style={{ backgroundColor: "var(--black-15)" }}
        >
            <h4 style={{ color: "var(--grey-60)" }}>Cast</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5">
                {cast.slice(0, 8).map((member: CastMember) => (
                    <div key={member.id} className="flex flex-col items-center text-center">
                        <div className="w-[102px] h-[109px]  rounded-xl overflow-hidden">
                            {member.profile_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                                    alt={member.name}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-xs text-white">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className="mt-1 text-sm text-white truncate max-w-[102px]">{member.name}</div>
                        <div className="text-xs text-gray-400 truncate max-w-[102px]">{member.character}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};