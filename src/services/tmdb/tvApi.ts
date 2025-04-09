import { tmdbApi } from './tmdbApi';


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
    }),
    overrideExisting: false,
});

export const { useGetTrendingTVQuery, useGetAiringTodayQuery, useGetOnTheAirQuery } = tvApi;