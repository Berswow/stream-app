import {tmdbApi} from "@/services/tmdb/tmdbApi.ts";
import {ReviewsResponse} from "@/Interface/ReviewInterface.ts";

export const reviewsApi = tmdbApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovieReviews: builder.query<ReviewsResponse, number>({
            query: (movieId: number) => ({
                url: `movie/${movieId}/reviews`
            })
        }),
        getShowReviews: builder.query<ReviewsResponse, number>({
            query: (showId: number) => ({
                url: `tv/${showId}/reviews`
            })
        })
    }),
    overrideExisting: false
})

export const {
    useGetMovieReviewsQuery,
    useGetShowReviewsQuery
} = reviewsApi