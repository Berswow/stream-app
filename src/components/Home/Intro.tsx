import {Button} from "@/components/ui/button.tsx";

export const Intro = () => {
    return (
            <section className='flex flex-col items-center gap-12 mt-[700px]'>
                <div className='flex flex-col items-center gap-3.5'>
                    <h1 className='font-bold'>The Best Streaming Experience</h1>
                    <p style={{ color: "var(--grey-60)" }}>StreamVibe is the best streaming experience for watching your favorite movies and shows on
                        demand,
                        anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the
                        latest
                        blockbusters, classic movies, popular TV shows, and more. You can also create your own
                        watchlists,
                        so you can easily find the content you want to watch.</p>
                </div>
                <Button variant='default' className='h-[64px]'><svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.75 2.59479C0.75 0.930971 2.53383 -0.123757 3.9917 0.678068L17.4557 8.08328C18.9668 8.91436 18.9668 11.0856 17.4557 11.9167L3.9917 19.3219C2.53383 20.1238 0.75 19.069 0.75 17.4052V2.59479Z" fill="white"/>
                </svg>
                    Start Watching Now</Button>
            </section>
    );
};