import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

export function useInViewObserver() {
    const [isVisible, setIsVisible] = useState(false);
    const { inView, ref } = useInView({ triggerOnce: true, threshold: 0.6 });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return { ref, isVisible };
}