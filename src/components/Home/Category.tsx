import {imageHorrorArray, imageDramaArray, imageComedyArray, imageAdventureArray, imageActionArray} from '@/utils/images.ts'
import {Play} from "lucide-react";

type CategoryProps = {
    title: string;
    description: string;
};

const categoryPoster = [imageActionArray, imageAdventureArray, imageComedyArray, imageDramaArray, imageHorrorArray]
const categoryGenre = ['Action', 'Adventure', 'Comedy', 'Drama', 'Horror']

export const Category = ({title, description}: CategoryProps) => {
    return (
        <section className='flex flex-col gap-20'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3.5'>
                    <h2>{title}</h2>
                    <p style={{color: "var(--grey-60)"}}>{description}</p>
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

            <div className='grid grid-cols-5 grid-rows-1 gap-7.5'>
                {[...new Array(5)].map((_, i) => (
                    <div className='flex flex-col items-center rounded-2xl p-8'
                         style={{backgroundColor: "var(--black-15)"}}>
                        <div className="relative rounded-2xl overflow-hidden">
                            <div className="grid grid-cols-2 grid-rows-2 gap-1.5">
                                {categoryPoster[i].map((src, index) => (
                                    <img key={index} src={src} alt={`Image ${index}`} className="rounded-lg" />
                                ))}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='flex w-[86px] h-[32px] bg-primary rounded items-center p-2.5'>
                                <p className='block text-[16px]'>Top 10 In</p>
                            </div>
                            <div className='flex mt-2 justify-between items-center w-full'>
                                <p className='block'>{categoryGenre[i]}</p>
                                <Play fill="white" stroke="white"/>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};