import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/layout/Header.tsx";
import { BackgroundGrid } from "@/components/Home/BackgroundGrid.tsx";
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { useInView } from "react-intersection-observer";

const LazyCTA = lazy(() =>
    import("@/layout/CTA.tsx").then((module) => ({ default: module.CTA }))
);
const LazyFooter = lazy(() =>
    import("@/layout/Footer").then((module) => ({ default: module.Footer }))
);

export const Layout = () => {
    const { pathname } = useLocation();
    const isHomePage = pathname === "/";

    const { ref: CTARef, inView: CTAInView } = useInView({ triggerOnce: true, threshold: 0.6 });
    const { ref: FooterRef, inView: FooterInView } = useInView({ triggerOnce: true, threshold: 0.6 });

    return (
        <>
            {isHomePage && (
                <div className="absolute inset-0 -z-10">
                    <BackgroundGrid />
                </div>
            )}

                <div className={`min-h-screen ${isHomePage ? "relative z-10" : ""}`}>
                    <div className="container">
                        <Header />
                        <Outlet />

                        {/* CTA Lazy Load */}
                        <div ref={CTARef} className="min-h-[60vh] flex justify-center items-center">
                            {CTAInView && (
                                <Suspense fallback={<div className="text-muted-foreground">Загрузка блока...</div>}>
                                    <LazyCTA />
                                </Suspense>
                            )}
                        </div>

                        {/* Footer Lazy Load */}
                        <div ref={FooterRef} className="min-h-[60vh]">
                            {FooterInView && (
                                <Suspense fallback={<div className="text-muted-foreground">Загрузка футера...</div>}>
                                    <LazyFooter />
                                </Suspense>
                            )}
                        </div>
                    </div>
                </div>

                <Toaster />
        </>
    );
};
