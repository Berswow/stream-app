import { useGetFilteredMoviesQuery } from "@/services/tmdb/filterApi";
import { useMemo } from "react";

export const useMovieGenresData = () => {
    const action = useGetFilteredMoviesQuery({ genres: [28] });
    const adventure = useGetFilteredMoviesQuery({ genres: [12] });
    const animation = useGetFilteredMoviesQuery({ genres: [16] });
    const comedy = useGetFilteredMoviesQuery({ genres: [35] });
    const crime = useGetFilteredMoviesQuery({ genres: [80] });
    const documentary = useGetFilteredMoviesQuery({ genres: [99] });
    const drama = useGetFilteredMoviesQuery({ genres: [18] });
    const family = useGetFilteredMoviesQuery({ genres: [10751] });
    const fantasy = useGetFilteredMoviesQuery({ genres: [14] });
    const history = useGetFilteredMoviesQuery({ genres: [36] });
    const horror = useGetFilteredMoviesQuery({ genres: [27] });
    const music = useGetFilteredMoviesQuery({ genres: [10402] });
    const mystery = useGetFilteredMoviesQuery({ genres: [9648] });
    const romance = useGetFilteredMoviesQuery({ genres: [10749] });
    const sciFi = useGetFilteredMoviesQuery({ genres: [878] });
    const tvMovie = useGetFilteredMoviesQuery({ genres: [10770] });
    const thriller = useGetFilteredMoviesQuery({ genres: [53] });
    const war = useGetFilteredMoviesQuery({ genres: [10752] });
    const western = useGetFilteredMoviesQuery({ genres: [37] });

    return useMemo(() => ([
        { genre: "Action", data: action },
        { genre: "Adventure", data: adventure },
        { genre: "Animation", data: animation },
        { genre: "Comedy", data: comedy },
        { genre: "Crime", data: crime },
        { genre: "Documentary", data: documentary },
        { genre: "Drama", data: drama },
        { genre: "Family", data: family },
        { genre: "Fantasy", data: fantasy },
        { genre: "History", data: history },
        { genre: "Horror", data: horror },
        { genre: "Music", data: music },
        { genre: "Mystery", data: mystery },
        { genre: "Romance", data: romance },
        { genre: "Science Fiction", data: sciFi },
        { genre: "TV Movie", data: tvMovie },
        { genre: "Thriller", data: thriller },
        { genre: "War", data: war },
        { genre: "Western", data: western },
    ]), [
        action, adventure, animation, comedy, crime, documentary, drama, family,
        fantasy, history, horror, music, mystery, romance, sciFi, tvMovie,
        thriller, war, western
    ]);
};
