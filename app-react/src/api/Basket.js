export const newBasket = async () => {
    const basket =null;
    const response = await fetch('http://localhost:1337/api/basket?populate=*', { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const basket = await response.json()
    return basket;
}
