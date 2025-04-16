import {useGetMovieReviewsQuery} from "@/services/tmdb/reviewsApi.ts";
import {Review} from "@/Interface/ReviewInterface.ts";

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

            <div className='flex flex-wrap gap-5'>

                {reviews?.map((review: Review)=> (
                    <div key={review.id} className='flex flex-col gap-5 p-10 rounded-xl basis-[calc(50%-10px)]' style={{backgroundColor: "var(--black-06)"}}>
                        <div className='flex justify-between'>
                            <div className='flex flex-col gap-1'>
                                <p>{review.author}</p>
                                <p style={{color: "var(--grey-60)"}}>From India</p>
                            </div>
                            <div>{review.author_details.rating}</div>
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