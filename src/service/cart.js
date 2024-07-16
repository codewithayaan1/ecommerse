export const getCart = () => {
    return fetch('https://fakestoreapi.com/carts/5')
        .then(res => res.json())
}