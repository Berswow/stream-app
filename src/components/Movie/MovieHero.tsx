import {Button} from "@/components/ui/button.tsx";
import {Play, Plus, ThumbsUp, Volume2} from "lucide-react";

export const MovieHero = () => {
    return (
        <div className='relative'>
            <div className='w-[1594px] h-[835px] bg-neutral-500'>background</div>
            <div className="absolute bottom-0 left-0 flex flex-col items-center p-12.5 w-full">
                <div className='flex flex-col items-center gap-12.5 max-w-[800px] text-center'>
                    <h2 className='text-[38px] font-bold'>
                        Kantara
                    </h2>
                    <p className="text-gray-400">
                        A fiery young man clashes with an unflinching forest officer in a south Indian village where
                        spirituality, fate and folklore rule the lands.
                    </p>
                    <div className='flex gap-5'>
                        <Button className='h-[56px]'>
                            <Play fill="white" stroke="white"/> Play Now
                        </Button>
                        <Button variant='outline' className='h-[56px] w-[56px] text-white'>
                            <Plus/>
                        </Button>
                        <Button variant='outline' className='h-[56px] w-[56px] text-white'>
                            <ThumbsUp/>
                        </Button>
                        <Button variant='outline' className='h-[56px] w-[56px] text-white'>
                            <Volume2/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};