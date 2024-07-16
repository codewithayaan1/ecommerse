import React, { useEffect, useState, memo, useCallback } from 'react'
import { Button, Card } from 'react-bootstrap'
import { addInCart } from '../service/products'
import { useDebounce } from './hooks/useDebounce'

const AddToCartComponent = ({ data }) => {
    const [quantity, setQuantity] = useState(0)

    const handleInc = () => setQuantity(prev => prev + 1)
    const handleDec = () => setQuantity(prev => prev - 1);

    const debounceQuantity = useDebounce(quantity, 300);


    const addToCartAPI = useCallback(async (productId) => {
        if (!debounceQuantity) return;
        const payload = {
            productId,
            quantity: debounceQuantity,
        }
        await addInCart([payload])
    }, [debounceQuantity])


    useEffect(() => {
        addToCartAPI(data.product.id)
    }, [debounceQuantity, data, addToCartAPI])

    return (
        <Card.Footer className='d-flex align-items-center'>
            <Button variant="secondary" onClick={handleDec}>-</Button>
            <Card.Text className='mx-2 mt-3 w-25 text-center'>{quantity}</Card.Text>
            <Button variant="primary" onClick={handleInc}>+</Button>
        </Card.Footer>
    )
}

const isMemoize = (prev, next) => {
    if (prev.data.product.id !== next.data.product.id) return false;
    if (prev.callMeLater !== next.callMeLater) return false;
    return true;
}

export const AddToCart = memo(AddToCartComponent, isMemoize)