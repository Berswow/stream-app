import {Button} from "@/components/ui/button.tsx";
import {Category} from "@/components/Home/Category.tsx";
import {Clock3, Eye, Star} from "lucide-react";
import {imageMoviesMustWatchArray, imageMoviesTrendArray, imageMoviesNewReleasesArray} from "@/utils/images.ts";

export const Movies = () => {
    return (
        <section className='mt-25'>
            <fieldset className='border border-gray-700 rounded-xl p-12'>
                <legend className='ml-10'><Button className='h-12.5'>Movies</Button></legend>
                <div className='p-12'>
                    <Category title='Our Genres' description=''/>
                </div>
                <div className='p-12'>
                    <Category title='Popular Top 10 In Genres' description=''/>
                </div>

                {/*Trending Now*/}

                <div className='flex flex-col gap-12.5 p-12'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-3.5'>
                            <h2>Trending Now</h2>
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
                        {[...new Array(5)].map((_, i) => (
                            <div className='flex flex-col items-center rounded-2xl p-8'
                                 style={{backgroundColor: "var(--black-15)"}}>
                                <div className="relative rounded-2xl overflow-hidden">
                                    <div key={i} className="flex">
                                        <img src={imageMoviesTrendArray[i]} alt={`Image ${i}`} className="rounded-lg"/>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>
                                </div>
                                <div className='flex justify-between w-full text-[16px] pt-5'>
                                    <div className='flex gap-0.5 rounded-2xl p-1.5 bg-neutral-900'>
                                        <Clock3/><p>1h 30min</p>
                                    </div>
                                    <div className='flex gap 0.5 rounded-2xl p-1.5 bg-neutral-900'>
                                        <Eye/><p>2K</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/*New Releases*/}

                <div className='flex flex-col gap-12.5 p-12'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-3.5'>
                            <h2>New Releases</h2>
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
                        {[...new Array(5)].map((_, i) => (
                            <div className='flex flex-col items-center rounded-2xl p-8'
                                 style={{backgroundColor: "var(--black-15)"}}>
                                <div className="relative rounded-2xl overflow-hidden">
                                    <div key={i} className="flex">
                                        <img src={imageMoviesNewReleasesArray[i]} alt={`Image ${i}`} className="rounded-lg"/>
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

                {/*Must - Watch Movies*/}


                <div className='flex flex-col gap-12.5 p-12'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col gap-3.5'>
                            <h2>Must - Watch Movies</h2>
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
                    <div className='flex justify-between gap-5'>
                        {[...new Array(4)].map((_, i) => (
                            <div className='flex flex-col items-center rounded-2xl p-8'
                                 style={{backgroundColor: "var(--black-15)"}}>
                                <div className="relative rounded-2xl overflow-hidden">
                                    <div key={i} className="flex">
                                        <img src={imageMoviesMustWatchArray[i]} alt={`Image ${i}`} className="rounded-lg"/>
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>
                                </div>
                                <div className='flex justify-between w-full text-[16px] pt-5'>
                                    <div className='flex gap-0.5 rounded-2xl p-1.5 bg-neutral-900'>
                                        <Clock3/><p>1h 57min</p>
                                    </div>
                                    <div className='flex rounded-2xl p-1.5 bg-neutral-900 items-center'>
                                        <Star size={20} className='fill-primary stroke-0'/><Star size={20} className='fill-primary stroke-0'/><Star size={20} className='fill-primary stroke-0'/><Star size={20} className='fill-primary stroke-0'/><Star size={20} className='fill-white stroke-0'/><p className='text-[14px] ml-1'>20K</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </fieldset>
        </section>
    );
};