import image from "../../assets/Support/image-container.png"

export const SupportHero = () => {
    return (
        <div className='flex flex-col max-w-[532px] justify-between'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-5xl font-bold'>Welcome to our support page!</h1>
                <div className='text-neutral-500'>
                    <p>We're here to help you with any problems you may be having with our product.</p>
                </div>
            </div>
            <div>
                <img src={image} alt="container"/>
            </div>
        </div>
    );
};