import { HomeHero } from "@/widgets/Home/HomeHero.tsx";
import { Devices } from "@/widgets/Home/Devices.tsx";
import { Faq } from "@/widgets/Home/Faq.tsx";
import { Subscription } from "@/widgets/Home/Subscription.tsx";

export const Home = () => {
    return (
        <main className="flex flex-col">
            <div className="flex justify-center items-center my-50">
                <HomeHero />
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
