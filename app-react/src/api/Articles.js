export const getArticles = async () => {
    const response = await fetch('http://localhost:1337/api/articles?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const articles = await response.json()
    return articles;
}