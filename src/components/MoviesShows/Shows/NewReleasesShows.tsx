import {imageShowsNewReleasesArray} from "@/utils/images.ts";

export const NewReleasesShows = () => {
    return (
        <div className='flex flex-col gap-12.5 p-12'>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-3.5'>
                    <h2>New Released Shows</h2>
                    <p style={{color: "var(--grey-60)"}}></p>
                </div>
                <div className='flex justify-between items-center self-end w-[257px] h-[88px] rounded-2xl p-4'
                     style={{backgroundColor: "var(--black-06)"}}>
                    <div className=' flex justify-center items-center w-[56px] h-[56px] rounded-2xl'
                         style={{backgroundColor: "var(--black-10)"}}>
                        <button>⇦</button>
                    </div>
                    <div className=' flex justify-center items-center w-[56px] h-[56px] rounded-2xl'
                         style={{backgroundColor: "var(--black-10)"}}>
                        <button>⇨</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-7.5'>
                {[...new Array(4)].map((_, i) => (
                    <div className='flex flex-col items-center rounded-2xl p-5'
                         style={{backgroundColor: "var(--black-15)"}}>
                        <div className="relative rounded-2xl overflow-hidden">
                            <div key={i} className="flex">
                                <img src={imageShowsNewReleasesArray[i]} alt={`Image ${i}`} className="rounded-lg"/>
                            </div>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>
                        </div>
                        <div className='flex w-full justify-center text-[16px] pt-5'>
                            <div className='gap-0.5 rounded-2xl py-1 px-3 bg-neutral-900'>
                                <p><span className='text-gray-300'>Released at 14 </span>April 2023</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};