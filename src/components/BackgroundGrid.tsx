
const images = import.meta.glob<{ default: string }>('../assets/home-title-images/*.{png,jpg,jpeg,svg}', { eager: true });
const imageArray = Object.values(images).map((img) => img.default);

export const BackgroundGrid = () => {
    return (
        <div>
            <div className="absolute inset-0 -z-10 grid grid-cols-9 grid-rows-4 gap-5 opacity-30 max-h-[860px] max-w-[1920px] mx-auto">
                {imageArray.map((src, index) => (
                    <img key={index} src={src} alt={`Image ${index}`} className="rounded-lg" />
                ))}
            </div>
        </div>



    );
};