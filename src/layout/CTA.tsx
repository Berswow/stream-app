import backgroundImage from '../assets/background-images.png';
import {Button} from "@/components/ui/button.tsx";

export const CTA = () => {
    return (
        <section
            className="relative flex items-center mt-[100px] w-[1600px] h-[313px]"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="relative z-20 flex gap-80 p-20">
                <div className="flex flex-col gap-3.5">
                    <h2>Start your free trial today!</h2>
                    <p className="text-gray-600">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                </div>
                <Button>Start a Free Trial</Button>
            </div>
        </section>
    );
};