import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const tmdbBaseQuery = fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
    prepareHeaders: (headers) => {
        headers.set('Accept', 'application/json');
        return headers;
    },
    paramsSerializer: (params) => new URLSearchParams(params).toString(),
});

export const baseQueryWithApiKey = async (args: any, api: any, extraOptions: any) => {
    if (typeof args === 'string') {
        args = { url: args };
    }

    args.params = {
        ...args.params,
        api_key: API_KEY,
    };

    return tmdbBaseQuery(args, api, extraOptions);
};