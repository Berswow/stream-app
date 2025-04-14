import {Subscription} from "@/components/Home/Subscription.tsx";
import {SubscriptionTable} from "@/components/Subscription/SubscriptionTable.tsx";

export const Subscriptions = () => {
    return (
        <main className='flex flex-col gap-25 my-50'>
            <Subscription/>
            <SubscriptionTable/>
        </main>
    );
};