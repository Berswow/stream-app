import {Faq} from "@/widgets/Home/Faq.tsx";
import {SupportForm} from "@/entities/support/SupportForm.tsx";
import {SupportHero} from "@/entities/support/SupportHero.tsx";

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