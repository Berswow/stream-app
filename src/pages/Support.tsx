import {Faq} from "@/components/Home/Faq.tsx";
import {SupportForm} from "@/components/Support/SupportForm.tsx";
import {SupportHero} from "@/components/Support/SupportHero.tsx";

export const Support = () => {
    return (
        <main className='flex flex-col gap-37.5 my-50'>
            <div className='flex justify-between gap-20'>
                <SupportHero/>
                <SupportForm/>
            </div>
            <Faq/>
        </main>
    );
};