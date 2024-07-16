import { useState, useEffect, useOptimistic } from 'react';
import useThrottle from './useThrottle';

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleResize = useThrottle(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }, 1000)

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
}

export default useWindowSize;