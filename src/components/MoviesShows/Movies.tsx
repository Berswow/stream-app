import {Button} from "@/components/ui/button.tsx";
import {Category} from "@/components/Home/Category.tsx";

export const Movies = () => {
    return (
        <div className='mt-25'>
            <fieldset className='border border-gray-500 rounded-xl p-12'>
                <legend className='ml-10'><Button className='h-12.5'>Movies</Button></legend>
                <div className='p-12'>
                    <Category title='Our Genres' description=''/>
                </div>
                <div className='p-12'>
                    <Category title='Popular Top 10 In Genres' description=''/>
                </div>
            </fieldset>
        </div>
    );
};