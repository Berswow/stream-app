export const MovieReviews = () => {
    return (
        <div className='flex flex-col rounded-xl p-12.5 gap-7.5'
             style={{backgroundColor: "var(--black-15)"}}>
            <h4 style={{ color: "var(--grey-60)" }}>Reviews</h4>
            <div className='flex gap-5'>


                <div className='flex flex-col gap-5 p-10 rounded-xl' style={{backgroundColor: "var(--black-06)"}}>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-1'>
                            <p>Aniket Roy</p>
                            <p style={{color: "var(--grey-60)"}}>From India</p>
                        </div>
                        <div>4.5</div>
                    </div>
                    <div>
                        <p style={{color: "var(--grey-60)"}}>This movie was recommended to me by a very dear friend who
                            went for the movie by herself. I
                            went to the cinemas to watch but had a houseful board so couldn’t watch it.</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 p-10 rounded-xl' style={{backgroundColor: "var(--black-06)"}}>
                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-1'>
                            <p>Swaraj</p>
                            <p style={{color: "var(--grey-60)"}}>From India</p>
                        </div>
                        <div>4.9</div>
                    </div>
                    <div>
                        <p style={{color: "var(--grey-60)"}}>A restless king promises his lands to the local tribals in
                            exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace
                            of mind.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};