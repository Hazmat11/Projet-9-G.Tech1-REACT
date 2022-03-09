/*export function newOrder = async () => {
    const ids = []
    state.order.forEach(articles => ids.push(articles.id))
    const response = await fetch('http://localhost:1337/api/order', { method: 'POST', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const basket = await response.json()
    body : {
        articles : [ids]
    }
}*/
