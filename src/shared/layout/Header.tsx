import {useLocation, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {cn} from "@/shared/lib/utils.ts";
import {SearchInput} from "@/shared/ui/SearchInput/SearchInput.tsx";

const tabs = [
    {id: "home", label: "Home", link: "/"},
    {id: "movies", label: "Movies & Shows", link: "/movieshows"},
    {id: "series", label: "Support", link: "/support"},
    {id: "favorites", label: "Subscriptions", link: "/subscriptions"},
];

export const Header = () => {
    const location = useLocation();
    const activeTab = tabs.find((tab) => location.pathname === tab.link)?.id;

    return (
        <header className="flex justify-between items-center pt-4">
            <div className="logo">
                <svg width="199" height="60" viewBox="0 0 199 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='text-primary'
                        d="M49.7834 24.0839C49.3635 10.9327 38.7071 0.319787 25.5115 0C25.1716 0 24.8917 0.259827 24.8917 0.5996L24.8717 9.43371C24.8717 9.87342 24.5318 10.2132 24.092 10.2332C10.9364 10.6329 0.319893 21.3058 0 34.497C0 34.8368 0.259913 35.1166 0.5998 35.1166L9.41686 35.1366C9.85671 35.1366 10.1966 35.4763 10.2166 35.9161C10.6365 49.0673 21.3129 59.6802 34.4885 60C34.8284 60 35.1083 59.7402 35.1083 59.4004L35.1283 50.5663C35.1283 50.1266 35.4682 49.7868 35.908 49.7668C49.0636 49.3471 59.6801 38.6742 60 25.503C60 25.1632 59.7401 24.8834 59.4002 24.8834L50.5831 24.8634C50.1433 24.8634 49.8034 24.5236 49.7834 24.0839ZM34.2486 49.7069C26.7711 49.2672 20.7731 43.1912 20.4932 35.6762C20.4732 35.3564 20.2133 35.0966 19.8934 35.0966L11.0963 35.0766C10.6365 35.0766 10.2766 34.6969 10.2966 34.2372C10.7364 26.7622 16.8144 20.7662 24.3319 20.4863C24.6518 20.4664 24.9117 20.2065 24.9117 19.8867L24.9317 11.0726C24.9317 10.6129 25.3116 10.2532 25.7714 10.2732C33.2489 10.7129 39.2469 16.7888 39.5268 24.3038C39.5468 24.6236 39.8067 24.8834 40.1266 24.8834L48.9237 24.9034C49.3835 24.9034 49.7434 25.2831 49.7234 25.7428C49.2836 33.4177 42.9057 39.5137 35.1283 39.5137L35.1083 48.9074C35.0883 49.3671 34.7084 49.7268 34.2486 49.7069Z"
                        fill="#E60000"/>
                    <path className='text-primary' fillRule="evenodd" clipRule="evenodd"
                          d="M24.6304 24.6828C24.6304 23.4735 25.927 22.7068 26.9866 23.2897L36.7729 28.6721C37.8713 29.2762 37.8713 30.8544 36.7729 31.4585L26.9866 36.841C25.9269 37.4238 24.6304 36.6571 24.6304 35.4478V24.6828Z"
                          fill="white"/>
                </svg>
            </div>

            <nav className="min-w-2xl">
                <div className="relative w-full max-w-2xl mx-auto p-1 rounded-2xl min-h-[75px]"
                     style={{backgroundColor: "var(--black-10)"}}>
                    <div className="flex relative gap-2 bg-gray-800 rounded-xl overflow-hidden"
                         style={{backgroundColor: "var(--black-06)"}}>
                        {tabs.map((tab) => (
                            <NavLink
                                key={tab.id}
                                to={tab.link}
                                className={({isActive}) =>
                                    cn(
                                        "relative flex-1 text-white transition-colors text-center flex items-center justify-center h-[75px]",
                                        isActive ? "text-white" : "text-gray-400",
                                        "whitespace-nowrap z-10"
                                    )
                                }
                            >
                                {tab.label}
                            </NavLink>
                        ))}

                        {/* Анимированный индикатор */}
                        <motion.div
                            className="absolute top-1 bottom-1 rounded-xl z-0"
                            style={{backgroundColor: "var(--black-10)"}}
                            layoutId="activeIndicator"
                            initial={false}
                            transition={{type: "spring", stiffness: 300, damping: 30}}
                            animate={{
                                width: `calc(100% / ${tabs.length} - 8px)`,
                                left: `calc(${tabs.findIndex((tab) => tab.id === activeTab)} * (100% / ${tabs.length}) + 4px)`,
                            }}
                        />
                    </div>
                </div>
            </nav>

            <div className="flex gap-8 items-center justify-end">
                <SearchInput/>
                <div>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.0472 24.1991C23.7312 23.8807 26.3193 23.2497 28.7741 22.3435C26.7386 20.0841 25.4997 17.093 25.4997 13.8125V12.8197C25.4999 12.7965 25.5 12.7732 25.5 12.75C25.5 8.05558 21.6944 4.25 17 4.25C12.3056 4.25 8.5 8.05558 8.5 12.75L8.49972 13.8125C8.49972 17.093 7.2608 20.0841 5.22534 22.3435C7.68032 23.2498 10.2686 23.8808 12.9528 24.1992M21.0472 24.1991C19.72 24.3565 18.3693 24.4375 16.9997 24.4375C15.6303 24.4375 14.2798 24.3565 12.9528 24.1992M21.0472 24.1991C21.1789 24.6091 21.25 25.0462 21.25 25.5C21.25 27.8472 19.3472 29.75 17 29.75C14.6528 29.75 12.75 27.8472 12.75 25.5C12.75 25.0463 12.8211 24.6091 12.9528 24.1992"
                            stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </header>
    );
};