import { useEffect, useState } from 'react'

const options = {
    root: null, // viewport
    rootMargin: '0px', // no margin
    threshold: 0.8, // 80% of target visible
}

export const useVisible = (targetRef) => {
    const [isVisible, setIsVisible] = useState(false);

    const setIsVisibleCallback = ([entry]) => {
        if (entry.isIntersecting) setIsVisible(entry.isIntersecting);
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            setIsVisibleCallback,
            options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        // Clean up the observer
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    return isVisible
}
