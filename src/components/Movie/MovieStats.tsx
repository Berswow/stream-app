import {Calendar, Languages, LayoutGrid, Music, Star, Video} from "lucide-react";

export const MovieStats = () => {
    return (
        <div className='flex flex-col max-w-[519px] rounded-xl p-12.5 gap-7.5'
             style={{backgroundColor: "var(--black-15)"}}>
            {/*Released Year*/}

            <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-1' style={{color: "var(--grey-60)"}}>
                    <Calendar size={24}/><h4 style={{color: "var(--grey-60)"}}>Released Year</h4>
                </div>
                <div>
                    <p>2022</p>
                </div>
            </div>

            {/*Available Languages*/}

            <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-1' style={{color: "var(--grey-60)"}}>
                    <Languages size={24}/><h4 style={{color: "var(--grey-60)"}}>Available Languages</h4>
                </div>
                <div className='flex flex-wrap gap-2.5'>
                    <p className='py-2 px-3.5 rounded-xl border border-neutral-700 text-center'
                       style={{backgroundColor: "var(--black-08)"}}>English</p>
                    <p className='py-2 px-3.5 rounded-xl border border-neutral-700 text-center'
                       style={{backgroundColor: "var(--black-08)"}}>Hindi</p>
                    <p className='py-2 px-3.5 rounded-xl border border-neutral-700 text-center'
                       style={{backgroundColor: "var(--black-08)"}}>Tamil</p>
                    <p className='py-2 px-3.5 rounded-xl border border-neutral-700 text-center'
                       style={{backgroundColor: "var(--black-08)"}}>Telegu</p>
                    <p className='py-2 px-3.5 rounded-xl border border-neutral-700 text-center'
                       style={{backgroundColor: "var(--black-08)"}}>Kannada</p>
                </div>
            </div>

            {/*Ratings*/}

            <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-1' style={{color: "var(--grey-60)"}}>
                    <Star size={24}/><h4 style={{color: "var(--grey-60)"}}>Ratings</h4>
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col gap-1 p-4 rounded-xl border border-neutral-700 flex-1/2'
                         style={{backgroundColor: "var(--black-08)"}}>
                        <p>IMDb</p>
                        <div className='flex'><Star className='fill-orange-600 stroke-0' size={24}/><Star
                            className='fill-orange-600 stroke-0' size={24}/><Star className='fill-orange-600 stroke-0'
                                                                                  size={24}/><Star
                            className='fill-orange-600 stroke-0' size={24}/><Star
                            className='fill-orange-600 stroke-0' size={24}/>4.5
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 p-4 rounded-xl border border-neutral-700 flex-1/2'
                         style={{backgroundColor: "var(--black-08)"}}>
                        <p>Streamvibe</p>
                        <div className='flex'><Star className='fill-orange-600 stroke-0' size={24}/><Star
                            className='fill-orange-600 stroke-0' size={24}/><Star className='fill-orange-600 stroke-0'
                                                                                  size={24}/><Star
                            className='fill-orange-600 stroke-0' size={24}/><Star
                            className='fill-neutral-400 stroke-0' size={24}/>4.1
                        </div>
                    </div>
                </div>
            </div>

            {/*Gernes*/}

            <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-1' style={{color: "var(--grey-60)"}}>
                    <LayoutGrid size={24}/><h4 style={{color: "var(--grey-60)"}}>Gernes</h4>
                </div>
                <div className='flex gap-2.5'>
                    <p className='py-2 px-3.5 rounded-xl border border-neutral-700 text-center'
                       style={{backgroundColor: "var(--black-08)"}}>Action</p>
                    <p className='py-2 px-3.5 rounded-xl border border-neutral-700 text-center'
                       style={{backgroundColor: "var(--black-08)"}}>Adventure</p>
                </div>
            </div>

            {/*Director*/}

            <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-1' style={{color: "var(--grey-60)"}}>
                    <Video size={24}/><h4 style={{color: "var(--grey-60)"}}>Director</h4>
                </div>

                <div className='flex gap-2.5 rounded-xl items-center p-3.5' style={{backgroundColor: "var(--black-08)"}}>
                    <div className='w-[56px] h-[60px] bg-neutral-500 rounded-xl text-center'>img</div>
                    <div className='flex flex-col'>
                        <h4>Rishab Shetty</h4>
                        <p>From India</p>
                    </div>
                </div>
            </div>

            {/*Music*/}

            <div className='flex flex-col gap-3.5'>
                <div className='flex items-center gap-1' style={{color: "var(--grey-60)"}}>
                    <Music size={24}/><h4 style={{color: "var(--grey-60)"}}>Music</h4>
                </div>

                <div className='flex gap-2.5 rounded-xl items-center p-3.5' style={{backgroundColor: "var(--black-08)"}}>
                    <div className='w-[56px] h-[60px] bg-neutral-500 rounded-xl text-center'>img</div>
                    <div className='flex flex-col'>
                        <h4>B. Ajaneesh Loknath</h4>
                        <p>From India</p>
                    </div>
                </div>
            </div>
        </div>
    );
};