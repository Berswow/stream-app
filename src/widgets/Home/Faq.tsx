import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/shared/ui/accordion.tsx";
import "keen-slider/keen-slider.min.css";
import {Button} from "@/shared/ui/button.tsx";


const faqData = [
    { id: 1, question: "What is CineStreamBox?", answer: "CineStreamBox is a streaming service that allows you to watch movies and shows on demand." },
    { id: 2, question: "How much does CineStreamBox cost?", answer: "CineStreamBox offers various pricing plans. Check our website for the latest details." },
    { id: 3, question: "What content is available on CineStreamBox?", answer: "You can watch a vast collection of movies, TV shows, and exclusive originals." },
    { id: 4, question: "How can I watch CineStreamBox?", answer: "CineStreamBox is available on web browsers, mobile apps, and smart TVs." },
    { id: 5, question: "How do I sign up for CineStreamBox?", answer: "Simply visit our website, choose a plan, and create an account." },
    { id: 6, question: "What is the CineStreamBox free trial?", answer: "New users can enjoy a 7-day free trial with access to all features." },
    { id: 7, question: "How do I contact CineStreamBox customer support?", answer: "You can reach us via email, live chat, or our help center." },
    { id: 8, question: "What are the CineStreamBox payment methods?", answer: "We accept credit cards, PayPal, and other online payment methods." },
];

export const Faq = () => {

    const firstColumn = faqData.slice(0, 4);
    const secondColumn = faqData.slice(4, 8);



    return (
        <section className='flex flex-col gap-20'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3.5'>
                    <h2>Frequently Asked Questions</h2>
                    <p style={{color: "var(--grey-60)"}}>Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about CineStreamBox.</p>
                </div>
                <Button className='self-end'>Ask a Question</Button>
            </div>
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
        </section>

    );
};