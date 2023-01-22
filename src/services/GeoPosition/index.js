import axios from 'axios'

const GeoPosAPI = process.env.REACT_APP_MAP

export async function getImageFlagUrl(country) {
    return await axios.get(`${GeoPosAPI}${country}`)
}
