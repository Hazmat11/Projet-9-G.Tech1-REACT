export const getImages = async () => {
    const response = await fetch('http://localhost:1337/uploads/Exotic_Taste_54b7357042.png', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const images = await response.json()
    return images;
}