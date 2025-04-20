import {Subscription} from "@/widgets/Home/Subscription.tsx";
import {SubscriptionTable} from "@/entities/subscription/SubscriptionTable.tsx";

export const Subscriptions = () => {
    return (
        <main className='flex flex-col gap-25 my-50'>
            <Subscription/>
            <SubscriptionTable/>
        </main>
    );
};