import {Hero} from "@/components/Support/Hero.tsx";
import {Faq} from "@/components/Home/Faq.tsx";
import {SupportForm} from "@/components/Support/SupportForm.tsx";

export const Support = () => {
    return (
        <main className='flex flex-col gap-37.5'>
            <div className='flex justify-between gap-20'>
                <Hero/>
                <SupportForm/>
            </div>
            <Faq/>
        </main>
    );
};