export const MovieCast = () => {
    return (
        <div className='flex flex-col max-w-[1057px] w-full rounded-xl p-12.5 gap-7.5' style={{ backgroundColor: "var(--black-15)" }}>
            <h4 style={{ color: "var(--grey-60)" }}>Cast</h4>
            <div className="grid grid-cols-8 grid-rows-1 gap-5">
                <p className='w-[102px] h-[109px] bg-neutral-500 rounded-xl'>1</p>
                <p className='w-[102px] h-[109px] bg-neutral-500 rounded-xl'>2</p>
                <p className='w-[102px] h-[109px] bg-neutral-500 rounded-xl'>3</p>
                <p className='w-[102px] h-[109px] bg-neutral-500 rounded-xl'>4</p>
                <p className='w-[102px] h-[109px] bg-neutral-500 rounded-xl'>5</p>
                <p className='w-[102px] h-[109px] bg-neutral-500 rounded-xl'>6</p>
                <p className='w-[102px] h-[109px] bg-neutral-500 rounded-xl'>7</p>
                <p className='w-[102px] h-[109px] bg-neutral-500 rounded-xl'>8</p>
            </div>
        </div>
    );
};