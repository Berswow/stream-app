import { Hero } from "@/components/Home/Hero";
import { Devices } from "@/components/Home/Devices";
import { Faq } from "@/components/Home/Faq";
import { Subscription } from "@/components/Home/Subscription";

export const Home = () => {
    return (
        <main className="flex flex-col">
            <div className="min-h-[60vh] flex justify-center items-center mb-50">
                <Hero />
            </div>

            <div className="min-h-[30vh] flex justify-center items-center">
                <Devices />
            </div>

            <div className="min-h-[60vh] flex justify-center items-center">
                <Faq />
            </div>

            <div className="min-h-[30vh] flex justify-center items-center">
                <Subscription />
            </div>
        </main>
    );
};
