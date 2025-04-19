import {tmdbApi} from './tmdbApi';
import {TvShowDetailed} from "@/Interface/Show/TvShowDetailInterface.ts";
import {CastMember} from "@/Interface/Movie/MovieCastInerface.ts";
import {CrewMember} from "@/Interface/Movie/MovieCrewInterface.ts";
import {SeasonDetails} from "@/Interface/Show/TvShowSeasonDetailed.ts";

// interface TMDBResponse<T> {
//     results: T[];
// }


export const tvShowApi = tmdbApi.injectEndpoints({
    endpoints: (builder) => ({
        getTrendingTV: builder.query({
            query: ({time_window = 'day', page = 1}) => ({
                url: `trending/tv/${time_window}`,
                params: {
                    page: page
                }
            })
        }),
        getAiringToday: builder.query({
            query: (page: number = 1) => ({
                url: 'tv/airing_today',
                params: {
                    page: page
                }
            })
        }),
        getOnTheAir: builder.query({
            query: (page: number = 1) => ({
                url: `tv/on_the_air`,
                params: {
                    page: page
                }
            })
        }),
        getTvShowDetails: builder.query<TvShowDetailed, string | number>({
            query: (id) => `/tv/${id}`,
        }),
        getTvShowCast: builder.query<{
            cast: CastMember[];
            crew: {
                directors: CrewMember[];
                producers: CrewMember[];
            };
        }, string | number>({
            query: (id) => `/tv/${id}/credits`,
            transformResponse: (response: {
                cast: CastMember[];
                crew: CrewMember[];
            }) => {
                const directors = response.crew.filter(
                    (member) => member.job === 'Director'
                );

                const producers = response.crew.filter(
                    (member) => member.job === 'Producer'
                );

                return {
                    cast: response.cast,
                    crew: {
                        directors,
                        producers,
                    },
                };
            },
        }),
        getTvShowSeasonDetails: builder.query<SeasonDetails, {showId: number, seasonId: number}> ({
            query: ({showId, seasonId}) => ({
                url: `tv/${showId}/season/${seasonId}`
            })
        })
    }),
    overrideExisting: false,
});

export const {
    useGetTrendingTVQuery, useGetAiringTodayQuery, useGetOnTheAirQuery, useGetTvShowDetailsQuery, useGetTvShowCastQuery, useGetTvShowSeasonDetailsQuery,
} = tvShowApi;