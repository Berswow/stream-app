const imagesAction = import.meta.glob<{
    default: string
}>('../../assets/home-category-images/action/*.{png,jpg,jpeg,svg}', {eager: true});
const imageActionArray = Object.values(imagesAction).map((img) => img.default);

const imagesAdventure = import.meta.glob<{
    default: string
}>('../../assets/home-category-images/adventure/*.{png,jpg,jpeg,svg}', {eager: true});
const imageAdventureArray = Object.values(imagesAdventure).map((img) => img.default);

const imagesComedy = import.meta.glob<{
    default: string
}>('../../assets/home-category-images/comedy/*.{png,jpg,jpeg,svg}', {eager: true});
const imageComedyArray = Object.values(imagesComedy).map((img) => img.default);

const imagesDrama = import.meta.glob<{
    default: string
}>('../../assets/home-category-images/drama/*.{png,jpg,jpeg,svg}', {eager: true});
const imageDramaArray = Object.values(imagesDrama).map((img) => img.default);

const imagesHorror = import.meta.glob<{
    default: string
}>('../../assets/home-category-images/horror/*.{png,jpg,jpeg,svg}', {eager: true});
const imageHorrorArray = Object.values(imagesHorror).map((img) => img.default);

export const Category = () => {
    return (
        <section className='flex flex-col gap-20'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3.5'>
                    <h2>Explore our wide variety of categories</h2>
                    <p style={{color: "var(--grey-60)"}}>Whether you're looking for a comedy to make you laugh, a drama
                        to make you think, or a documentary to
                        learn something new</p>
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
                <div className='flex flex-col items-center rounded-2xl p-8 pb-0'
                     style={{backgroundColor: "var(--black-15)"}}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-1.5">
                        {imageActionArray.map((src, index) => (
                            <img key={index} src={src} alt={`Image ${index}`} className="rounded-lg"/>
                        ))}
                    </div>
                    <div className='flex gap-40 mt-2'>
                        <p>Action</p>
                        <span>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M0.75 2.59479C0.75 0.930971 2.53383 -0.123757 3.9917 0.678068L17.4557 8.08328C18.9668 8.91436 18.9668 11.0856 17.4557 11.9167L3.9917 19.3219C2.53383 20.1238 0.75 19.069 0.75 17.4052V2.59479Z"
                                      fill="white"/>
                         </svg>
                    </span>
                    </div>
                </div>

                <div className='flex flex-col items-center rounded-2xl p-8 pb-0'
                     style={{backgroundColor: "var(--black-15)"}}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-1.5">
                        {imageAdventureArray.map((src, index) => (
                            <img key={index} src={src} alt={`Image ${index}`} className="rounded-lg"/>
                        ))}
                    </div>
                    <div className='flex gap-40 mt-2'>
                        <p>Adventure</p>
                        <span>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M0.75 2.59479C0.75 0.930971 2.53383 -0.123757 3.9917 0.678068L17.4557 8.08328C18.9668 8.91436 18.9668 11.0856 17.4557 11.9167L3.9917 19.3219C2.53383 20.1238 0.75 19.069 0.75 17.4052V2.59479Z"
                                      fill="white"/>
                         </svg>
                    </span>
                    </div>
                </div>

                <div className='flex flex-col items-center rounded-2xl p-8 pb-0'
                     style={{backgroundColor: "var(--black-15)"}}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-1.5">
                        {imageComedyArray.map((src, index) => (
                            <img key={index} src={src} alt={`Image ${index}`} className="rounded-lg"/>
                        ))}
                    </div>
                    <div className='flex gap-40 mt-2'>
                        <p>Comedy</p>
                        <span>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M0.75 2.59479C0.75 0.930971 2.53383 -0.123757 3.9917 0.678068L17.4557 8.08328C18.9668 8.91436 18.9668 11.0856 17.4557 11.9167L3.9917 19.3219C2.53383 20.1238 0.75 19.069 0.75 17.4052V2.59479Z"
                                      fill="white"/>
                         </svg>
                    </span>
                    </div>
                </div>

                <div className='flex flex-col items-center rounded-2xl p-8 pb-0'
                     style={{backgroundColor: "var(--black-15)"}}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-1.5">
                        {imageDramaArray.map((src, index) => (
                            <img key={index} src={src} alt={`Image ${index}`} className="rounded-lg"/>
                        ))}
                    </div>
                    <div className='flex gap-40 mt-2'>
                        <p>Drama</p>
                        <span>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M0.75 2.59479C0.75 0.930971 2.53383 -0.123757 3.9917 0.678068L17.4557 8.08328C18.9668 8.91436 18.9668 11.0856 17.4557 11.9167L3.9917 19.3219C2.53383 20.1238 0.75 19.069 0.75 17.4052V2.59479Z"
                                      fill="white"/>
                         </svg>
                    </span>
                    </div>
                </div>

                <div className='flex flex-col items-center rounded-2xl p-8 pb-0'
                     style={{backgroundColor: "var(--black-15)"}}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-1.5">
                        {imageHorrorArray.map((src, index) => (
                            <img key={index} src={src} alt={`Image ${index}`} className="rounded-lg"/>
                        ))}
                    </div>
                    <div className='flex gap-40 mt-2'>
                        <p>Horror</p>
                        <span>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M0.75 2.59479C0.75 0.930971 2.53383 -0.123757 3.9917 0.678068L17.4557 8.08328C18.9668 8.91436 18.9668 11.0856 17.4557 11.9167L3.9917 19.3219C2.53383 20.1238 0.75 19.069 0.75 17.4052V2.59479Z"
                                      fill="white"/>
                         </svg>
                    </span>
                    </div>
                </div>
            </div>
        </section>
    );
};