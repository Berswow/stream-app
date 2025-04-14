import {CardGrid} from "@/components/CardGrid.tsx";
import {useParams} from "react-router-dom";

export const GenrePage = () => {
    const { id } = useParams<{ id: string }>();
    const genreId = Number(id);
    return (
        <div className='my-50'>
            <CardGrid genreId={genreId}/>
        </div>
    );
};