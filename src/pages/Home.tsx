import { lazy, Suspense, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const LazyHero = lazy(() => import("@/components/Home/Hero").then(m => ({ default: m.Hero })));
const LazyCategory = lazy(() => import("@/components/Home/Category").then(m => ({ default: m.Category })));
const LazyDevices = lazy(() => import("@/components/Home/Devices").then(m => ({ default: m.Devices })));
const LazyFaq = lazy(() => import("@/components/Home/Faq").then(m => ({ default: m.Faq })));
const LazySubscription = lazy(() => import("@/components/Home/Subscription").then(m => ({ default: m.Subscription })));

export const Home = () => {
    const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});

    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.6 });
    const { ref: categoryRef, inView: categoryInView } = useInView({ triggerOnce: true, threshold: 0.6 });
    const { ref: devicesRef, inView: devicesInView } = useInView({ triggerOnce: true, threshold: 0.6 });
    const { ref: faqRef, inView: faqInView } = useInView({ triggerOnce: true, threshold: 0.6 });
    const { ref: subscriptionRef, inView: subscriptionInView } = useInView({ triggerOnce: true, threshold: 0.6 });

    useEffect(() => {
        if (heroInView) setVisibleSections(prev => ({ ...prev, hero: true }));
        if (categoryInView) setVisibleSections(prev => ({ ...prev, category: true }));
        if (devicesInView) setVisibleSections(prev => ({ ...prev, devices: true }));
        if (faqInView) setVisibleSections(prev => ({ ...prev, faq: true }));
        if (subscriptionInView) setVisibleSections(prev => ({ ...prev, subscription: true }));
    }, [heroInView, categoryInView, devicesInView, faqInView, subscriptionInView]);

    return (
        <main className="flex flex-col">
            <div ref={heroRef} className="min-h-[60vh] flex justify-center items-center">
                {visibleSections.hero && (
                    <Suspense>
                        <LazyHero />
                    </Suspense>
                )}
            </div>

            <div ref={categoryRef} className="min-h-[60vh] flex justify-center items-center">
                {visibleSections.category && (
                    <Suspense>
                        <LazyCategory
                            title="Explore our wide variety of categories"
                            description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
                        />
                    </Suspense>
                )}
            </div>

            <div ref={devicesRef} className="min-h-[30vh] flex justify-center items-center">
                {visibleSections.devices && (
                    <Suspense>
                        <LazyDevices />
                    </Suspense>
                )}
            </div>

            <div ref={faqRef} className="min-h-[60vh] flex justify-center items-center">
                {visibleSections.faq && (
                    <Suspense>
                        <LazyFaq />
                    </Suspense>
                )}
            </div>

            <div ref={subscriptionRef} className="min-h-[30vh] flex justify-center items-center">
                {visibleSections.subscription && (
                    <Suspense>
                        <LazySubscription />
                    </Suspense>
                )}
            </div>
        </main>
    );
};
