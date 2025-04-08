import {useGetActionMoviesQuery} from "@/services/tmdbApi.ts";

export const Test = () => {
    const { data, isLoading, error } = useGetActionMoviesQuery(20)

    if (isLoading) return <div>Загрузка фильмов...</div>;
    if (error) return <div>Ошибка загрузки фильмов</div>;

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {data.results.map((movie: any) => (
                <div key={movie.id} className="bg-gray-900 p-2 rounded-xl">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-xl"
                    />
                    <p className="text-white mt-2 text-sm">{movie.title}</p>
                </div>
            ))}
        </div>
    );
}