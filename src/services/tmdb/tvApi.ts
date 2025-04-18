import {tmdbApi} from './tmdbApi';
import {TvShowInterface} from "@/Interface/Show/TvShowBaseInterface.ts";

interface TMDBResponse<T> {
    results: T[];
}


export const tvApi = tmdbApi.injectEndpoints({
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
        getPopularActionAdventureTV: builder.query<TvShowInterface[], void>({
            query: () => ({
                url: 'discover/tv',
                params: {
                    with_genres: 10759,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<TvShowInterface>) => {
                return response.results
            }
        }),
        getPopularAnimationTV: builder.query<TvShowInterface[], void>({
            query: () => ({
                url: 'discover/tv',
                params: {
                    with_genres: 16,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<TvShowInterface>) => {
                return response.results
            }
        }),
        getPopularComedyTV: builder.query<TvShowInterface[], void>({
            query: () => ({
                url: 'discover/tv',
                params: {
                    with_genres: 35,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<TvShowInterface>) => {
                return response.results
            }
        }),
        getPopularDramaTV: builder.query<TvShowInterface[], void>({
            query: () => ({
                url: 'discover/tv',
                params: {
                    with_genres: 18,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<TvShowInterface>) => {
                return response.results
            }
        }),
        getPopularFamilyTV: builder.query<TvShowInterface[], void>({
            query: () => ({
                url: 'discover/tv',
                params: {
                    with_genres: 10751,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<TvShowInterface>) => {
                return response.results
            }
        }),
    }),
    overrideExisting: false,
});

export const {
    useGetTrendingTVQuery, useGetAiringTodayQuery, useGetOnTheAirQuery, useGetPopularActionAdventureTVQuery,
    useGetPopularAnimationTVQuery,
    useGetPopularComedyTVQuery,
    useGetPopularDramaTVQuery,
    useGetPopularFamilyTVQuery
} = tvApi;