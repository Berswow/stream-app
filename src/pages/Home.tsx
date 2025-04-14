import { Hero } from "@/components/Home/Hero";
import { Devices } from "@/components/Home/Devices";
import { Faq } from "@/components/Home/Faq";
import { Subscription } from "@/components/Home/Subscription";

export const Home = () => {
    return (
        <main className="flex flex-col">
            <div className="flex justify-center items-center my-50">
                <Hero />
            </div>
            <div className='flex flex-col gap-50'>
                <div className="flex justify-center items-center">
                    <Devices />
                </div>

                <div className="flex justify-center items-center">
                    <Faq />
                </div>

                <div className="flex justify-center items-center">
                    <Subscription />
                </div>
            </div>
        </main>
    );
};
