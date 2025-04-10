import {Play} from "lucide-react";

type CategoryBlockProps<T> = {
    title: string;
    description?: string;
    genres: string[];
    genreMap: Record<string, T[]>;
    getId: (item: T) => string | number;
    getImage: (item: T) => string;
    getTitle: (item: T) => string;
};

export const CategoryBlock = <T, >({
                                       title,
                                       description,
                                       genres,
                                       genreMap,
                                       getId,
                                       getImage,
                                       getTitle,
                                   }: CategoryBlockProps<T>) => {
    return (
        <section className='flex flex-col gap-20'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3.5'>
                    <h2>{title}</h2>
                    {description && <p style={{color: "var(--grey-60)"}}>{description}</p>}
                </div>
                <div className='flex justify-between items-center self-end w-[257px] h-[88px] rounded-2xl p-4'
                     style={{backgroundColor: "var(--black-06)"}}>
                    <div className='flex justify-center items-center w-[56px] h-[56px] rounded-2xl'
                         style={{backgroundColor: "var(--black-10)"}}>
                        <button>⇦</button>
                    </div>
                    <div className='flex justify-center items-center w-[56px] h-[56px] rounded-2xl'
                         style={{backgroundColor: "var(--black-10)"}}>
                        <button>⇨</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-5 grid-rows-1 gap-7.5'>
                {genres.map((genre) => {
                    const items = genreMap[genre] || [];

                    return (
                        <div key={genre} className='flex flex-col items-center rounded-2xl p-8'
                             style={{backgroundColor: "var(--black-15)"}}>
                            <div className="relative rounded-2xl overflow-hidden">
                                <div className="grid grid-cols-2 grid-rows-2 gap-1.5">
                                    {items.slice(0, 4).map((item) => (
                                        <img
                                            key={getId(item)}
                                            src={getImage(item)}
                                            alt={getTitle(item)}
                                            className="rounded-lg object-cover"
                                            style={{width: '105px', height: '123px'}}
                                        />
                                    ))}
                                </div>
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"/>
                            </div>
                            <div className='flex flex-col w-full'>
                                <div className='flex mt-2 justify-between items-center w-full'>
                                    <p className='block'>{genre}</p>
                                    <Play fill="white" stroke="white"/>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
