import { useEffect, useRef } from 'react';

const useThrottle = (callback, delay) => {
    const timeoutRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (...args) => {
        if (!timeoutRef.current) {
            timeoutRef.current = setTimeout(() => {
                timeoutRef.current = null;
                callback(...args);
            }, delay);
        }
    };
};

export default useThrottle;
