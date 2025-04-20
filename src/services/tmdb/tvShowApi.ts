import {tmdbApi} from './tmdbApi';
import {TvShowDetailed} from "@/shared/interfaces/Show/TvShowDetailInterface.ts";
import {CastMember} from "@/shared/interfaces/Movie/MovieCastInerface.ts";
import {CrewMember} from "@/shared/interfaces/Movie/MovieCrewInterface.ts";
import {SeasonDetails} from "@/shared/interfaces/Show/TvShowSeasonDetailed.ts";

interface TMDBResponse<T> {
    results: T[];
}


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
        }),
        getTvShowSimilar: builder.query<TvShowDetailed[], string | number>({
            query: (id) => `/tv/${id}/similar`,
            transformResponse: (response: TMDBResponse<TvShowDetailed>) => {
                return response.results
            }
        })
    }),
    overrideExisting: false,
});

export const {
    useGetTrendingTVQuery, useGetAiringTodayQuery, useGetOnTheAirQuery, useGetTvShowDetailsQuery, useGetTvShowCastQuery, useGetTvShowSeasonDetailsQuery, useGetTvShowSimilarQuery
} = tvShowApi;