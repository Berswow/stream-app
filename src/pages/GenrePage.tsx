import {CardGrid} from "@/components/CardGrid.tsx";
import {useSelector} from "react-redux";
import {selectGenresFilter} from "@/redux/slices/filterSlice.ts";

export const GenrePage = () => {
    const genre = useSelector(selectGenresFilter)[0]
    return (
        <div className='my-50'>
            <CardGrid genreId={genre}/>
        </div>
    );
};