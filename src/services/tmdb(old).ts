// import axios from 'axios';
//
// const API_BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Из .env
//
// const axiosInstance = axios.create({
//     baseURL: API_BASE_URL,
//     params: {
//         api_key: API_KEY,
//     },
// });
//
//
// const fetchFromTMDb = async (endpoint: string, params = {}) => {
//     try {
//         const { data } = await axiosInstance.get(endpoint, { params });
//         return data;
//     } catch (error) {
//         console.error('Ошибка при запросе к TMDb:', error);
//         throw new Error('Ошибка при запросе данных');
//     }
// };
//
// /************ Movies ****************/
// export const getUpcomingMovies = () => fetchFromTMDb('/movie/upcoming')
// export const getPopularMovies = () => fetchFromTMDb('/movie/popular');
// export const getNowPlayingMovies = () => fetchFromTMDb('/movie/now_playing');
//
//
// /************ Shows ****************/
// export const getAiringToday =() => fetchFromTMDb('/tv/airing_today')
// export const getOnTheAir =() => fetchFromTMDb('/tv/on_the_air')
//
//
//
//
//
// /************************************/
// export const getTrending = (mediaType = 'all', timeWindow = 'day') =>
//     fetchFromTMDb(`/trending/${mediaType}/${timeWindow}`);
// export const getMovieDetails = (movieId: number) =>
//     fetchFromTMDb(`/movie/${movieId}`);
// export const searchMovies = (query: string) =>
//     fetchFromTMDb('/search/movie', { query });
// export const searchTvShows = (query: string) =>
//     fetchFromTMDb('/search/tv', { query });