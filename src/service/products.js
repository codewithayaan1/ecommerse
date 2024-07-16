// source: https://fakestoreapi.com/docs

export const getProducts = (limit = 20, signal) => {
    const uri = `https://fakestoreapi.com/products${limit ? `?limit=${limit}` : ''}`
    return fetch(uri, { signal }).then(res => res.json())
}

export const getProduct = (productId) => {
    return fetch(`https://fakestoreapi.com/products/${productId}`).then(res => res.json())
}

export const addInCart = (products) => {
    return fetch('https://fakestoreapi.com/carts/7', {
        method: "PUT",
        body: JSON.stringify(
            {
                userId: 3,
                date: "2019-12-10",
                products
            }
        )
    })
        .then(res => res.json())
}

export const markAsFavourate = (id, isFavourite) => {
    try {

        return fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "PATCH",
            body: JSON.stringify(
                {
                    isFavourite
                }
            )
        }).then(res => res.json())
    } catch (e) {
        throw e
    }

}