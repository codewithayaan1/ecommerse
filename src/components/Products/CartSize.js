import React from 'react';
import { Button } from 'react-bootstrap';
import { useWebWorker } from '../hooks/useWorker';

const sleep = (time) =>
    new Promise((res) => setTimeout(res, time))

// releasing call stack on between of loop : method 2
const loopTillSum = async (number) => {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        sum += i;
        if (i % 1000000 === 0) {
            await sleep(0);
        }
    }
    return sum;
}

const CartSize = () => {
    const allProductsCount = 5000 * 100 * 1000 * 5
    // const [result, setResult] = useState('...')
    const { calculate, result } = useWebWorker()


    const handleCalculate = () => {
        // loopTillSum(allProductsCount).then(setResult)
        calculate(allProductsCount)
    };

    return (
        <div>
            <h2>All products: {allProductsCount}</h2>
            <Button onClick={handleCalculate}>Calculate</Button>
            <h3 className='mt-3'>Sum of Products: {result}</h3>
        </div>
    );
};

export default CartSize;
