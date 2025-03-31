export const Category = () => {
    return (
        <section className='mt-[200px]'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3.5'>
                    <h1>Explore our wide variety of categories</h1>
                    <p style={{color: "var(--grey-60)"}}>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to
                        learn something new</p>
                </div>
                <div className='flex justify-between items-center self-end w-[257px] h-[88px] rounded-2xl p-4'
                style={{backgroundColor: "var(--black-06)"}}>
                    <div className=' flex justify-center items-center w-[56px] h-[56px] rounded-2xl'
                    style={{backgroundColor: "var(--black-10)"}}><button>⇦</button></div>
                    <div className=' flex justify-center items-center w-[56px] h-[56px] rounded-2xl'
                    style={{backgroundColor: "var(--black-10)"}}><button>⇨</button></div>
                </div>
            </div>
        </section>
    );
};