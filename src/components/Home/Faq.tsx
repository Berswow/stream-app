import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import { useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { cn } from "@/lib/utils";

const faqData = [
    { id: 1, question: "What is StreamVibe?", answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand." },
    { id: 2, question: "How much does StreamVibe cost?", answer: "StreamVibe offers various pricing plans. Check our website for the latest details." },
    { id: 3, question: "What content is available on StreamVibe?", answer: "You can watch a vast collection of movies, TV shows, and exclusive originals." },
    { id: 4, question: "How can I watch StreamVibe?", answer: "StreamVibe is available on web browsers, mobile apps, and smart TVs." },
    { id: 5, question: "How do I sign up for StreamVibe?", answer: "Simply visit our website, choose a plan, and create an account." },
    { id: 6, question: "What is the StreamVibe free trial?", answer: "New users can enjoy a 7-day free trial with access to all features." },
    { id: 7, question: "How do I contact StreamVibe customer support?", answer: "You can reach us via email, live chat, or our help center." },
    { id: 8, question: "What are the StreamVibe payment methods?", answer: "We accept credit cards, PayPal, and other online payment methods." },
];

export const Faq = () => {
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const [sliderRef, instanceRef] = useKeenSlider({
    //     initial: 0,
    //     slideChanged(slider) {
    //         setCurrentSlide(slider.track.details.rel);
    //     },
    //     slides: { perView: 1, spacing: 10 },
    // });

    // Разделяем вопросы на два массива по 4 элемента
    const firstColumn = faqData.slice(0, 4);
    const secondColumn = faqData.slice(4, 8);



    return (
        <>
            <div className="grid grid-cols-2 gap-x-20 w-full mx-auto">
                {[firstColumn, secondColumn].map((column, colIndex) => (
                    <Accordion key={colIndex} type="single" collapsible className="space-y-4">
                        {column.map((item, index) => (
                            <AccordionItem key={index} value={`item-${colIndex}-${index}`}>
                                <AccordionTrigger>
                                    <div className='flex items-center gap-5'>
                                        <div className='px-3 rounded-md bg-neutral-800'>
                                            {item.id}
                                        </div>
                                        {item.question}
                                    </div>

                                </AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                ))}
            </div>

            {/*<div className="relative w-full flex flex-col items-center">*/}
            {/*    <div ref={sliderRef} className="keen-slider w-full max-w-md">*/}
            {/*        <div className="keen-slider__slide bg-gray-800 h-48 flex items-center justify-center text-white">*/}
            {/*            Slide 1*/}
            {/*        </div>*/}
            {/*        <div className="keen-slider__slide bg-gray-700 h-48 flex items-center justify-center text-white">*/}
            {/*            Slide 2*/}
            {/*        </div>*/}
            {/*        <div className="keen-slider__slide bg-gray-600 h-48 flex items-center justify-center text-white">*/}
            {/*            Slide 3*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Навигация *!/*/}
            {/*    <div className="flex items-center mt-4 space-x-4">*/}
            {/*        <button*/}
            {/*            onClick={() => instanceRef.current?.prev()}*/}
            {/*            className="p-2 bg-gray-900 text-white rounded-full"*/}
            {/*        >*/}
            {/*            <ArrowLeft size={20} />*/}
            {/*        </button>*/}

            {/*        /!* Индикаторы *!/*/}
            {/*        <div className="flex space-x-2">*/}
            {/*            {[...Array(3)].map((_, idx) => (*/}
            {/*                <span*/}
            {/*                    key={idx}*/}
            {/*                    className={cn(*/}
            {/*                        "h-1 w-6 rounded-full bg-gray-500 transition-all",*/}
            {/*                        currentSlide === idx && "bg-red-900 w-8"*/}
            {/*                    )}*/}
            {/*                />*/}
            {/*            ))}*/}
            {/*        </div>*/}

            {/*        <button*/}
            {/*            onClick={() => instanceRef.current?.next()}*/}
            {/*            className="p-2 bg-gray-900 text-white rounded-full"*/}
            {/*        >*/}
            {/*            <ArrowRight size={20} />*/}
            {/*        </button>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </>

    );
};