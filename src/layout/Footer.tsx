export const Footer = () => {
    return (
        <footer className='flex flex-col gap-[100px] h-[505px]] mt-[100px] bg-transparent'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-6'>
                    <h5>Home</h5>
                    <ul className='flex flex-col gap-3.5'
                        style={{ color: "var(--grey-60)" }}>
                        <li>Categories</li>
                        <li>Devices</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6'>
                    <h5>Movies</h5>
                    <ul className='flex flex-col gap-3.5'
                        style={{ color: "var(--grey-60)" }}>
                        <li>Genres</li>
                        <li>Trending</li>
                        <li>New Release</li>
                        <li>Popular</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6'>
                    <h5>Shows</h5>
                    <ul className='flex flex-col gap-3.5'
                        style={{ color: "var(--grey-60)" }}>
                        <li>Gernes</li>
                        <li>Trending</li>
                        <li>New Release</li>
                        <li>Popular</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6'>
                    <h5>Support</h5>
                    <ul className='flex flex-col gap-3.5'
                        style={{ color: "var(--grey-60)" }}>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6'>
                    <h5>Subscription</h5>
                    <ul className='flex flex-col gap-3.5'
                        style={{ color: "var(--grey-60)" }}>
                        <li>Plans</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6'>
                    <h5>Connect With Us</h5>
                    <ul className='flex justify-between'>
                        <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4687H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92187 17.3438 4.92187V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4687H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="white"/>
                        </svg>
                        </li>
                        <li><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.55016 19.75C16.6045 19.75 21.5583 12.2467 21.5583 5.74186C21.5583 5.53092 21.5536 5.3153 21.5442 5.10436C22.5079 4.40746 23.3395 3.54425 24 2.5553C23.1025 2.9546 22.1496 3.21538 21.1739 3.32874C22.2013 2.71291 22.9705 1.74547 23.3391 0.605767C22.3726 1.17856 21.3156 1.58261 20.2134 1.80061C19.4708 1.01156 18.489 0.489116 17.4197 0.314051C16.3504 0.138986 15.2532 0.32105 14.2977 0.832096C13.3423 1.34314 12.5818 2.15471 12.1338 3.14131C11.6859 4.12792 11.5754 5.23462 11.8195 6.2903C9.86249 6.19209 7.94794 5.6837 6.19998 4.7981C4.45203 3.91249 2.90969 2.66944 1.67297 1.14952C1.0444 2.23324 0.852057 3.51565 1.13503 4.73609C1.418 5.95654 2.15506 7.02345 3.19641 7.71999C2.41463 7.69517 1.64998 7.48468 0.965625 7.10592V7.16686C0.964925 8.30415 1.3581 9.40659 2.07831 10.2868C2.79852 11.167 3.80132 11.7706 4.91625 11.995C4.19206 12.1931 3.43198 12.222 2.69484 12.0794C3.00945 13.0574 3.62157 13.9129 4.44577 14.5263C5.26997 15.1398 6.26512 15.4806 7.29234 15.5012C5.54842 16.8711 3.39417 17.6141 1.17656 17.6106C0.783287 17.61 0.390399 17.5859 0 17.5384C2.25286 18.9837 4.87353 19.7514 7.55016 19.75Z" fill="white"/>
                        </svg>
                        </li>
                        <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z" fill="white"/>
                        </svg>
                        </li>
                    </ul>
                </div>
            </div>


            <hr/>
            <div style={{ color: "var(--grey-60)" }}
            className='flex justify-between'>
                <div>
                    <p>@2023 streamvib, All Rights Reserved</p>
                </div>
                <div className='flex gap-[40px]'>
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                    <p>Cookie</p>
                </div>
            </div>
        </footer>
    );
};