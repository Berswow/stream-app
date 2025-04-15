// import {MovieHero} from "@/components/Support/MovieHero.tsx";
// import {Faq} from "@/components/Home/Faq.tsx";
// import {SupportForm} from "@/components/Support/SupportForm.tsx";

import {Movie} from "@/pages/Movie.tsx";

export const Support = () => {
    return (
        <main className='flex flex-col gap-37.5 my-50'>
            {/*<div className='flex justify-between gap-20'>*/}
            {/*    <MovieHero/>*/}
            {/*    <SupportForm/>*/}
            {/*</div>*/}
            {/*<Faq/>*/}
            <Movie/>
        </main>
    );
};