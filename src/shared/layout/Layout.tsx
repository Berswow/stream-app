import {Outlet, useLocation} from "react-router-dom";
import {Header} from "@/shared/layout/Header.tsx";
import {BackgroundGrid} from "@/widgets/Home/BackgroundGrid.tsx";
import {Toaster} from "@/shared/ui/sonner.tsx";
import {CTA} from "@/shared/layout/CTA.tsx";
import {Footer} from "@/shared/layout/Footer.tsx";


export const Layout = () => {
    const {pathname} = useLocation();
    const isHomePage = pathname === "/";

    return (
        <>
            {isHomePage && (
                <div className="absolute inset-0 -z-10">
                    <BackgroundGrid/>
                </div>
            )}

            <div className={`min-h-screen ${isHomePage ? "relative z-10" : ""}`}>
                <div className="container">
                    <div className='-mb-25 relative z-20'>
                        <Header/>
                    </div>
                    <div className='flex flex-col gap-25'>
                        <Outlet/>
                        <CTA/>
                        <Footer/>
                    </div>
                </div>
            </div>
            <Toaster/>
        </>
    );
};
