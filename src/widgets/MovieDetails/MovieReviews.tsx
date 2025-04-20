import {useGetMovieReviewsQuery} from "@/services/tmdb/reviewsApi.ts";
import {Review} from "@/shared/interfaces/ReviewInterface.ts";

type MovieReviewsProps = {
    movieId: number;
};

export const MovieReviews = ({movieId}: MovieReviewsProps) => {
    const {data, isLoading, error} = useGetMovieReviewsQuery(movieId!)

    const reviews = data?.results;

    if (isLoading) return <div>Reviews downloading...</div>;
    if (error || !data) return <div>Ошибка загрузки данных</div>;

    return (

        <div className='flex flex-col rounded-xl p-12.5 gap-7.5'
             style={{backgroundColor: "var(--black-15)"}}>
            <h4 style={{color: "var(--grey-60)"}}>Reviews</h4>

            <div className='flex flex-col gap-5'>


                {reviews?.map((review: Review) => (
                    <div key={review.id} className='flex flex-col gap-5 p-10 rounded-xl basis-full'
                         style={{backgroundColor: "var(--black-06)"}}>

                        <div className='flex justify-between'>
                            <div className='flex gap-3'>
                                <div className="w-[56px] h-[60px] rounded-xl overflow-hidden">
                                    {review.author_details.avatar_path ? (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w185${review.author_details.avatar_path}`}
                                            alt={review.author}
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-xs text-white bg-neutral-800">
                                            No Image
                                        </div>
                                    )}
                                </div>
                                <div className='self-end'>
                                    <p>{review.author}</p>
                                </div>
                            </div>

                            <div className='self-end text-orange-600'>{review.author_details.rating}</div>
                        </div>


                        <div>
                            <p className="line-clamp-3" style={{color: "var(--grey-60)"}}>{review.content}</p>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    );
};