export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/trending?api_key=AXLC7usJY6inqIz7dXdClNzRcYGRTiBo&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()

    console.log(data)
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
}