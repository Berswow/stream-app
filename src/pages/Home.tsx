import {Intro} from "@/components/Intro.tsx";
import {Category} from "@/components/Home/Category.tsx";

export const Home = () => {
    return (
        <main className='flex flex-col'>
            <Intro/>
            <Category/>
        </main>
    );
};