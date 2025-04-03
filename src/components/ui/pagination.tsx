import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
    totalSlides: number;
    currentSlide: number;
    onPrev: () => void;
    onNext: () => void;
}

export const Pagination = ({ totalSlides, currentSlide, onPrev, onNext }: PaginationProps) => {
    return (
        <div className="flex items-center mt-4 space-x-4">
            <button onClick={onPrev} className="p-2 bg-gray-900 text-white rounded-full">
                <ArrowLeft size={20} />
            </button>

            {/* Индикаторы */}
            <div className="flex space-x-2">
                {[...Array(totalSlides)].map((_, idx) => (
                    <span
                        key={idx}
                        className={cn(
                            "h-1 w-6 rounded-full bg-gray-500 transition-all",
                            currentSlide === idx && "bg-red-900 w-8"
                        )}
                    />
                ))}
            </div>

            <button onClick={onNext} className="p-2 bg-gray-900 text-white rounded-full">
                <ArrowRight size={20} />
            </button>
        </div>
    );
};