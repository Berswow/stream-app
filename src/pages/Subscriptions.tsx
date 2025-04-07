import {Subscription} from "@/components/Home/Subscription.tsx";
import {SubscriptionTable} from "@/components/Subscription/SubscriptionTable.tsx";
import {Test} from "@/components/Test.tsx";

export const Subscriptions = () => {
    return (
        <main className='flex flex-col gap-25'>
            <Subscription/>
            <SubscriptionTable/>
            <Test/>
        </main>
    );
};