export const getArticles = async () => {
    const response = await fetch('http://localhost:1337/api/basket?populate=*', { method: 'PUT', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const articles = await response.json()
    return articles;
}
