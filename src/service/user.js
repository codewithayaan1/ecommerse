export const getUser = () =>
    fetch('https://fakestoreapi.com/users/1').then(res => res.json())

