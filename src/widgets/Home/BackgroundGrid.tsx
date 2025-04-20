import backgroundGrid from '../../shared/assets/backgroundGrid.png';

export const BackgroundGrid = () => {
    return (
        <div className='flex flex-col'>
            <div className="absolute inset-0 -z-10 max-h-[860px] max-w-[1920px] mx-auto">
                <img className='w-full h-full object-cover' src={backgroundGrid} width={1920} height={860} alt=""/>
            </div>
        </div>
    );
};