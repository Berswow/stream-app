import {Skeleton} from "@/shared/ui/skeleton.tsx";

export const EpisodeSkeleton = () => {
    return (
        <div className="flex gap-5 items-center p-12.5 border-t border-neutral-800 w-full">

            <Skeleton className="w-10 h-8 rounded-md" />


            <Skeleton className="w-[172px] h-[118px] sm:w-[140px] sm:h-[100px] xs:w-[100px] xs:h-[80px] rounded-2xl shrink-0" />


            <div className="flex flex-col gap-3.5 flex-1">
                <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-1/4" />
                    <Skeleton className="h-4 w-10" />
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
            </div>
        </div>
    );
};