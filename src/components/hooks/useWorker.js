// useWebWorker.js
import { useEffect, useState } from 'react';

export const useWebWorker = () => {
    const [worker, setWorker] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        const workerInstance = new Worker('worker.js');
        setWorker(workerInstance);

        return () => {
            workerInstance.terminate();
        };
    }, []);

    const calculate = (number) => {
        if (worker) {
            worker.postMessage({ number });

            worker.onmessage = (event) => {
                setResult(event.data);
            };
        }
    };

    return { calculate, result };
};

