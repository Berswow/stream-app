import {useLocation, NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {cn} from "@/lib/utils.ts";

const tabs = [
    {id: "home", label: "Home", link: "/"},
    {id: "movies", label: "Movies & Shows", link: "/movieshows"},
    {id: "series", label: "Support", link: "/support"},
    {id: "favorites", label: "Subscriptions", link: "/subscriptions"},
];

export const Header = () => {
    const location = useLocation();
    const activeTab = tabs.find(tab => tab.link === location.pathname)?.id || tabs[0].id;

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
                    <path
                        d="M63 26.9054C63 26.1466 63.1431 25.4348 63.4293 24.7698C63.7155 24.1049 64.1027 23.5251 64.5909 23.0307C65.0876 22.5277 65.6642 22.1313 66.3208 21.8414C66.9773 21.5516 67.6802 21.4066 68.4294 21.4066H76.7376V25.0767H68.4294C68.1769 25.0767 67.9412 25.1236 67.7223 25.2174C67.5035 25.3112 67.3098 25.4433 67.1415 25.6138C66.9816 25.7758 66.8553 25.9676 66.7627 26.1893C66.6701 26.4109 66.6238 26.6496 66.6238 26.9054C66.6238 27.1611 66.6701 27.4041 66.7627 27.6343C66.8553 27.8559 66.9816 28.052 67.1415 28.2225C67.3098 28.3845 67.5035 28.5124 67.7223 28.6061C67.9412 28.6999 68.1769 28.7468 68.4294 28.7468H72.0532C72.8024 28.7468 73.5052 28.8917 74.1618 29.1816C74.8268 29.4629 75.4034 29.8551 75.8917 30.3581C76.3883 30.8525 76.7755 31.4365 77.0533 32.11C77.3395 32.7749 77.4826 33.4868 77.4826 34.2455C77.4826 35.0043 77.3395 35.7161 77.0533 36.3811C76.7755 37.046 76.3883 37.63 75.8917 38.133C75.4034 38.6275 74.8268 39.0196 74.1618 39.3095C73.5052 39.5993 72.8024 39.7442 72.0532 39.7442H64.0101V36.0742H72.0532C72.3057 36.0742 72.5414 36.0273 72.7603 35.9335C72.9791 35.8397 73.1685 35.7118 73.3285 35.5499C73.4968 35.3794 73.6273 35.1833 73.7199 34.9616C73.8125 34.74 73.8588 34.5013 73.8588 34.2455C73.8588 33.9898 73.8125 33.7511 73.7199 33.5294C73.6273 33.3078 73.4968 33.1159 73.3285 32.954C73.1685 32.7835 72.9791 32.6513 72.7603 32.5575C72.5414 32.4638 72.3057 32.4169 72.0532 32.4169H68.4294C67.6802 32.4169 66.9773 32.272 66.3208 31.9821C65.6642 31.6922 65.0876 31.3001 64.5909 30.8056C64.1027 30.3026 63.7155 29.7187 63.4293 29.0537C63.1431 28.3802 63 27.6641 63 26.9054Z"
                        fill="white"/>
                    <path
                        d="M86.056 39.7442C85.2226 39.7442 84.4398 39.5865 83.7075 39.2711C82.9751 38.9471 82.3312 38.5081 81.7756 37.954C81.2285 37.3913 80.7949 36.7391 80.4751 35.9974C80.1636 35.2558 80.0079 34.4629 80.0079 33.6189V29.5524H78.3286V26.0742H80.0079V20.601H83.4423V26.0742H88.6697V29.5524H83.4423V33.6189C83.4423 33.9855 83.5096 34.3308 83.6443 34.6547C83.779 34.9702 83.9642 35.2472 84.1999 35.4859C84.4356 35.7246 84.7134 35.9165 85.0332 36.0614C85.3531 36.1978 85.694 36.266 86.056 36.266H88.6697V39.7442H86.056Z"
                        fill="white"/>
                    <path
                        d="M94.0612 39.7442H90.6142V26.0486H91.4475L92.5839 27.6726C93.1395 27.1611 93.7708 26.769 94.4779 26.4962C95.1849 26.2148 95.9173 26.0742 96.6749 26.0742H99.7179V29.5524H96.6749C96.3129 29.5524 95.972 29.6206 95.6521 29.757C95.3323 29.8934 95.0545 30.081 94.8188 30.3197C94.5831 30.5584 94.3979 30.8397 94.2632 31.1637C94.1285 31.4876 94.0612 31.8329 94.0612 32.1995V39.7442Z"
                        fill="white"/>
                    <path
                        d="M106.448 36.3939C106.582 36.4365 106.717 36.4663 106.852 36.4834C106.987 36.4919 107.121 36.4962 107.256 36.4962C107.593 36.4962 107.917 36.4493 108.228 36.3555C108.54 36.2617 108.83 36.1296 109.099 35.9591C109.377 35.7801 109.621 35.5669 109.832 35.3197C110.051 35.0639 110.227 34.7826 110.362 34.4757L112.887 37.046C112.567 37.5064 112.197 37.9199 111.776 38.2864C111.364 38.653 110.913 38.9642 110.425 39.2199C109.945 39.4757 109.436 39.6675 108.897 39.7954C108.367 39.9318 107.82 40 107.256 40C106.305 40 105.408 39.821 104.566 39.4629C103.733 39.1049 103.001 38.6061 102.369 37.9668C101.747 37.3274 101.254 36.5686 100.892 35.6905C100.53 34.8039 100.349 33.8321 100.349 32.7749C100.349 31.6922 100.53 30.7033 100.892 29.8082C101.254 28.913 101.747 28.15 102.369 27.5192C103.001 26.8883 103.733 26.3981 104.566 26.0486C105.408 25.6991 106.305 25.5243 107.256 25.5243C107.82 25.5243 108.371 25.5925 108.91 25.7289C109.449 25.8653 109.958 26.0614 110.438 26.3171C110.926 26.5729 111.381 26.8883 111.801 27.2634C112.222 27.63 112.593 28.0435 112.913 28.5038L106.448 36.3939ZM108.215 29.1944C108.056 29.1347 107.896 29.0963 107.736 29.0793C107.584 29.0622 107.424 29.0537 107.256 29.0537C106.784 29.0537 106.338 29.1432 105.917 29.3223C105.505 29.4928 105.143 29.74 104.832 30.0639C104.529 30.3879 104.289 30.7801 104.112 31.2404C103.935 31.6922 103.847 32.2038 103.847 32.7749C103.847 32.9028 103.851 33.0477 103.859 33.2097C103.876 33.3717 103.897 33.5379 103.922 33.7084C103.956 33.8704 103.994 34.0281 104.036 34.1816C104.078 34.335 104.133 34.4714 104.2 34.5908L108.215 29.1944Z"
                        fill="white"/>
                    <path
                        d="M127.648 39.7442H126.814L125.476 37.8645C125.148 38.1628 124.798 38.4442 124.428 38.7084C124.066 38.9642 123.683 39.1901 123.279 39.3862C122.875 39.5737 122.458 39.7229 122.029 39.8338C121.608 39.9446 121.179 40 120.741 40C119.79 40 118.893 39.838 118.052 39.5141C117.218 39.1901 116.486 38.7212 115.855 38.1074C115.232 37.4851 114.739 36.7263 114.377 35.8312C114.015 34.9361 113.834 33.9173 113.834 32.7749C113.834 31.7093 114.015 30.7332 114.377 29.8465C114.739 28.9514 115.232 28.1841 115.855 27.5448C116.486 26.9054 117.218 26.4109 118.052 26.0614C118.893 25.7033 119.79 25.5243 120.741 25.5243C121.179 25.5243 121.612 25.5797 122.042 25.6905C122.471 25.8014 122.887 25.9548 123.292 26.1509C123.696 26.347 124.079 26.5772 124.441 26.8414C124.811 27.1057 125.156 27.3913 125.476 27.6982L126.814 26.0742H127.648V39.7442ZM124.175 32.7749C124.175 32.2975 124.083 31.8372 123.898 31.3939C123.721 30.942 123.477 30.5456 123.165 30.2046C122.854 29.8551 122.488 29.578 122.067 29.3734C121.654 29.1603 121.212 29.0537 120.741 29.0537C120.27 29.0537 119.823 29.1347 119.403 29.2967C118.99 29.4587 118.628 29.6974 118.317 30.0128C118.014 30.3282 117.774 30.7204 117.597 31.1893C117.42 31.6496 117.332 32.1782 117.332 32.7749C117.332 33.3717 117.42 33.9045 117.597 34.3734C117.774 34.8338 118.014 35.2217 118.317 35.5371C118.628 35.8525 118.99 36.0912 119.403 36.2532C119.823 36.4152 120.27 36.4962 120.741 36.4962C121.212 36.4962 121.654 36.3939 122.067 36.1893C122.488 35.9761 122.854 35.6991 123.165 35.3581C123.477 35.0085 123.721 34.6121 123.898 34.1688C124.083 33.717 124.175 33.2523 124.175 32.7749Z"
                        fill="white"/>
                    <path
                        d="M147.484 39.7442H144.049V31.0486C144.049 30.8099 144.003 30.584 143.911 30.3708C143.826 30.1577 143.704 29.9702 143.544 29.8082C143.384 29.6462 143.199 29.5226 142.989 29.4373C142.778 29.3436 142.555 29.2967 142.32 29.2967C142.084 29.2967 141.861 29.3436 141.65 29.4373C141.448 29.5226 141.267 29.6462 141.108 29.8082C140.956 29.9702 140.834 30.1577 140.741 30.3708C140.657 30.584 140.615 30.8099 140.615 31.0486V39.7442H137.168V31.0486C137.168 30.8099 137.122 30.584 137.029 30.3708C136.945 30.1577 136.823 29.9702 136.663 29.8082C136.503 29.6462 136.318 29.5226 136.107 29.4373C135.897 29.3436 135.674 29.2967 135.438 29.2967C135.203 29.2967 134.979 29.3436 134.769 29.4373C134.567 29.5226 134.386 29.6462 134.226 29.8082C134.075 29.9702 133.952 30.1577 133.86 30.3708C133.776 30.584 133.734 30.8099 133.734 31.0486V39.7442H130.287V26.0486H131.12L132.054 27.0972C132.534 26.688 133.06 26.3725 133.633 26.1509C134.213 25.9207 134.815 25.8056 135.438 25.8056C136.07 25.8056 136.684 25.925 137.282 26.1637C137.888 26.4024 138.418 26.8159 138.873 27.4041C139.083 27.1142 139.323 26.867 139.592 26.6624C139.862 26.4578 140.144 26.2916 140.438 26.1637C140.741 26.0358 141.053 25.9463 141.373 25.8951C141.693 25.8355 142.008 25.8056 142.32 25.8056C143.035 25.8056 143.704 25.942 144.327 26.2148C144.959 26.4876 145.506 26.8627 145.969 27.3402C146.44 27.809 146.81 28.3632 147.08 29.0026C147.349 29.6419 147.484 30.324 147.484 31.0486V39.7442Z"
                        fill="white"/>
                    <path
                        d="M164.214 21.4066L158.267 39.7442H154.643L148.721 21.4066H152.838L156.449 33.6445L160.073 21.4066H164.214Z"
                        fill="white"/>
                    <path
                        d="M169.656 22.3274C169.656 22.6513 169.593 22.954 169.467 23.2353C169.349 23.5166 169.185 23.7639 168.974 23.977C168.764 24.1816 168.515 24.3478 168.229 24.4757C167.951 24.5951 167.653 24.6547 167.333 24.6547C167.013 24.6547 166.71 24.5951 166.424 24.4757C166.146 24.3478 165.902 24.1816 165.691 23.977C165.489 23.7639 165.325 23.5166 165.199 23.2353C165.081 22.954 165.022 22.6513 165.022 22.3274C165.022 22.0119 165.081 21.7136 165.199 21.4322C165.325 21.1424 165.489 20.8951 165.691 20.6905C165.902 20.4774 166.146 20.3112 166.424 20.1918C166.71 20.0639 167.013 20 167.333 20C167.653 20 167.951 20.0639 168.229 20.1918C168.515 20.3112 168.764 20.4774 168.974 20.6905C169.185 20.8951 169.349 21.1424 169.467 21.4322C169.593 21.7136 169.656 22.0119 169.656 22.3274ZM169.063 39.7442H165.59V26.0486H169.063V39.7442Z"
                        fill="white"/>
                    <path
                        d="M185.237 32.7749C185.237 33.8491 185.056 34.8295 184.694 35.7161C184.332 36.6027 183.84 37.3657 183.217 38.0051C182.594 38.636 181.862 39.1262 181.02 39.4757C180.187 39.8252 179.29 40 178.33 40C177.379 40 176.483 39.821 175.641 39.4629C174.808 39.1049 174.075 38.6061 173.444 37.9668C172.821 37.3274 172.329 36.5686 171.967 35.6905C171.605 34.8039 171.424 33.8321 171.424 32.7749V20.601H174.883V26.9949C175.069 26.7562 175.292 26.5431 175.553 26.3555C175.822 26.1679 176.108 26.0145 176.411 25.8951C176.723 25.7758 177.043 25.6863 177.371 25.6266C177.699 25.5584 178.019 25.5243 178.33 25.5243C179.29 25.5243 180.187 25.7076 181.02 26.0742C181.862 26.4322 182.594 26.9352 183.217 27.5831C183.84 28.231 184.332 28.9983 184.694 29.8849C185.056 30.763 185.237 31.7263 185.237 32.7749ZM181.765 32.7749C181.765 32.2464 181.672 31.7562 181.487 31.3043C181.31 30.844 181.066 30.4476 180.755 30.1151C180.443 29.7826 180.077 29.5226 179.656 29.335C179.244 29.1475 178.802 29.0537 178.33 29.0537C177.859 29.0537 177.413 29.1603 176.992 29.3734C176.58 29.578 176.218 29.8551 175.906 30.2046C175.595 30.5456 175.351 30.942 175.174 31.3939C174.997 31.8372 174.909 32.2975 174.909 32.7749C174.909 33.3035 174.997 33.7937 175.174 34.2455C175.351 34.6974 175.595 35.0895 175.906 35.422C176.218 35.7545 176.58 36.0188 176.992 36.2148C177.413 36.4024 177.859 36.4962 178.33 36.4962C178.802 36.4962 179.244 36.4024 179.656 36.2148C180.077 36.0188 180.443 35.7545 180.755 35.422C181.066 35.0895 181.31 34.6974 181.487 34.2455C181.672 33.7937 181.765 33.3035 181.765 32.7749Z"
                        fill="white"/>
                    <path
                        d="M192.535 36.3939C192.67 36.4365 192.805 36.4663 192.939 36.4834C193.074 36.4919 193.209 36.4962 193.343 36.4962C193.68 36.4962 194.004 36.4493 194.316 36.3555C194.627 36.2617 194.917 36.1296 195.187 35.9591C195.465 35.7801 195.709 35.5669 195.919 35.3197C196.138 35.0639 196.315 34.7826 196.449 34.4757L198.975 37.046C198.655 37.5064 198.285 37.9199 197.864 38.2864C197.451 38.653 197.001 38.9642 196.513 39.2199C196.033 39.4757 195.524 39.6675 194.985 39.7954C194.454 39.9318 193.907 40 193.343 40C192.392 40 191.496 39.821 190.654 39.4629C189.821 39.1049 189.088 38.6061 188.457 37.9668C187.834 37.3274 187.342 36.5686 186.98 35.6905C186.618 34.8039 186.437 33.8321 186.437 32.7749C186.437 31.6922 186.618 30.7033 186.98 29.8082C187.342 28.913 187.834 28.15 188.457 27.5192C189.088 26.8883 189.821 26.3981 190.654 26.0486C191.496 25.6991 192.392 25.5243 193.343 25.5243C193.907 25.5243 194.459 25.5925 194.997 25.7289C195.536 25.8653 196.045 26.0614 196.525 26.3171C197.013 26.5729 197.468 26.8883 197.889 27.2634C198.31 27.63 198.68 28.0435 199 28.5038L192.535 36.3939ZM194.303 29.1944C194.143 29.1347 193.983 29.0963 193.823 29.0793C193.672 29.0622 193.512 29.0537 193.343 29.0537C192.872 29.0537 192.426 29.1432 192.005 29.3223C191.592 29.4928 191.23 29.74 190.919 30.0639C190.616 30.3879 190.376 30.7801 190.199 31.2404C190.023 31.6922 189.934 32.2038 189.934 32.7749C189.934 32.9028 189.938 33.0477 189.947 33.2097C189.964 33.3717 189.985 33.5379 190.01 33.7084C190.044 33.8704 190.081 34.0281 190.124 34.1816C190.166 34.335 190.22 34.4714 190.288 34.5908L194.303 29.1944Z"
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
            <div className="flex gap-8">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M29.75 29.75L22.388 22.388M22.388 22.388C24.3108 20.4653 25.5 17.809 25.5 14.875C25.5 9.00697 20.743 4.25 14.875 4.25C9.00697 4.25 4.25 9.00697 4.25 14.875C4.25 20.743 9.00697 25.5 14.875 25.5C17.809 25.5 20.4653 24.3108 22.388 22.388Z"
                        stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
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