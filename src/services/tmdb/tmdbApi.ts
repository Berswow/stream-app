import { createApi, } from '@reduxjs/toolkit/query/react';
import {baseQueryWithApiKey} from "@/services/tmdb/tmdbBaseQuery.ts";

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: baseQueryWithApiKey,
    endpoints: () => ({}),
    tagTypes: ['Movies', 'TV', 'Genres']
});