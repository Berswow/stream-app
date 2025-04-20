import { useGetFilteredTvShowsQuery } from "@/services/tmdb/filterApi"; // предполагаемое имя
import { useMemo } from "react";

export const useTvGenresData = () => {
    const actionAdventure = useGetFilteredTvShowsQuery({ genres: [10759] });
    const animation = useGetFilteredTvShowsQuery({ genres: [16] });
    const comedy = useGetFilteredTvShowsQuery({ genres: [35] });
    const crime = useGetFilteredTvShowsQuery({ genres: [80] });
    const documentary = useGetFilteredTvShowsQuery({ genres: [99] });
    const drama = useGetFilteredTvShowsQuery({ genres: [18] });
    const family = useGetFilteredTvShowsQuery({ genres: [10751] });
    const kids = useGetFilteredTvShowsQuery({ genres: [10762] });
    const mystery = useGetFilteredTvShowsQuery({ genres: [9648] });
    const news = useGetFilteredTvShowsQuery({ genres: [10763] });
    const reality = useGetFilteredTvShowsQuery({ genres: [10764] });
    const sciFiFantasy = useGetFilteredTvShowsQuery({ genres: [10765] });
    const soap = useGetFilteredTvShowsQuery({ genres: [10766] });
    const talk = useGetFilteredTvShowsQuery({ genres: [10767] });
    const warPolitics = useGetFilteredTvShowsQuery({ genres: [10768] });
    const western = useGetFilteredTvShowsQuery({ genres: [37] });

    return useMemo(() => ([
        { genre: "Action & Adventure", data: actionAdventure },
        { genre: "Animation", data: animation },
        { genre: "Comedy", data: comedy },
        { genre: "Crime", data: crime },
        { genre: "Documentary", data: documentary },
        { genre: "Drama", data: drama },
        { genre: "Family", data: family },
        { genre: "Kids", data: kids },
        { genre: "Mystery", data: mystery },
        { genre: "News", data: news },
        { genre: "Reality", data: reality },
        { genre: "Sci-Fi & Fantasy", data: sciFiFantasy },
        { genre: "Soap", data: soap },
        { genre: "Talk", data: talk },
        { genre: "War & Politics", data: warPolitics },
        { genre: "Western", data: western },
    ]), [
        actionAdventure, animation, comedy, crime, documentary, drama, family,
        kids, mystery, news, reality, sciFiFantasy, soap, talk, warPolitics, western
    ]);
};
