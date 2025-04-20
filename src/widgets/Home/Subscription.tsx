import {Button} from "@/shared/ui/button.tsx";
import {useState} from "react";

const plansData = [
    {id: 1, plan: 'Basic Plan', description: 'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.', monthlyPrice: 9.99, annualPrice: 90.99},
    {id: 2, plan: 'Standard Plan', description: 'Access to a wider selection of movies and shows, including most new releases and exclusive content', monthlyPrice: 12.99, annualPrice: 120.99},
    {id: 3, plan: 'Premium Plan', description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing', monthlyPrice: 14.99, annualPrice: 140.99}
]


export const Subscription = () => {

    const [currentPlan, setCurrentPlan] = useState(true)

    return (
        <section className='flex flex-col gap-20'>
            <div className='flex justify-between items-center gap-24'>
                <div className='flex flex-col gap-3.5'>
                    <h2>Choose the plan that's right for you</h2>
                    <p style={{color: "var(--grey-60)"}}>Join CineStreamBox and select from our flexible subscription
                        options tailored to suit your viewing preferences. Get ready for non-stop entertainment!</p>
                </div>
                <div className='flex items-center p-2.5 gap-5 rounded-2xl'
                     style={{backgroundColor: "var(--black-06)"}}>
                    <Button
                        className={`h-[55px] transition-colors rounded-xl ${
                            currentPlan ? "bg-neutral-800 text-white" : "bg-transparent text-gray-400"
                        }`}
                        onClick={() => setCurrentPlan(true)}
                    >
                        Monthly
                    </Button>
                    <Button
                        className={`h-[55px] transition-colors rounded-xl ${
                            !currentPlan ? "bg-neutral-800 text-white" : "bg-transparent text-gray-400"
                        }`}
                        onClick={() => setCurrentPlan(false)}
                    >
                        Yearly
                    </Button>
                </div>
            </div>

            <div className='flex items-center gap-7.5'>
                {plansData.map((item, index) => (
                    <div className='flex flex-col gap-12.5 p-12.5'
                         style={{backgroundColor: "var(--black-15)"}} key={index}>
                        <div>
                            <h3>
                                {item.plan}
                            </h3>
                            <p style={{color: "var(--grey-60)"}}>
                                {item.description}
                            </p>
                        </div>
                        <div>
                            <h2>
                                ${currentPlan ? item.monthlyPrice : item.annualPrice}
                            </h2>
                        </div>
                        <div className='flex gap-5 w-full'>
                            <Button className='flex-1' variant='secondary'>Start Free Trial</Button>
                            <Button className='flex-1'>Choose Plan</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};