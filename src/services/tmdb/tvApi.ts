import {tmdbApi} from './tmdbApi';
import {ShowInterface} from "@/Interface/ShowInterface.ts";

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
        getPopularActionAdventureTV: builder.query<ShowInterface[], void>({
            query: () => ({
                url: 'discover/tv',
                params: {
                    with_genres: 10759,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<ShowInterface>) => {
                return response.results
            }
        }),
        getPopularAnimationTV: builder.query<ShowInterface[], void>({
            query: () => ({
                url: 'discover/tv',
                params: {
                    with_genres: 16,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<ShowInterface>) => {
                return response.results
            }
        }),
        getPopularComedyTV: builder.query<ShowInterface[], void>({
            query: () => ({
                url: 'discover/tv',
                params: {
                    with_genres: 35,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<ShowInterface>) => {
                return response.results
            }
        }),
        getPopularDramaTV: builder.query<ShowInterface[], void>({
            query: () => ({
                url: 'discover/tv',
                params: {
                    with_genres: 18,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<ShowInterface>) => {
                return response.results
            }
        }),
        getPopularFamilyTV: builder.query<ShowInterface[], void>({
            query: () => ({
                url: 'discover/tv',
                params: {
                    with_genres: 10751,
                    sort_by: 'popularity.desc',
                    page: 1
                }
            }),
            transformResponse: (response: TMDBResponse<ShowInterface>) => {
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