import axios from 'axios'

const geoPosAPI = process.env.REACT_APP_MAP
const currencyToCountryAPI = process.env.REACT_APP_CURRENCY_TO_COUNTRY
export const BING_MAP_TOKEN = process.env.REACT_APP_BING_TOKEN

export async function getGeoPosition(country) {
    try {
        if (country) {
            const parsedURL = geoPosAPI.replace('COUNTRYNAME', country)
            console.log('🚀 ~ file: index.js:11 ~ getGeoPosition ~ parsedURL', parsedURL)
            const result = await axios.get(parsedURL)
            console.log('🚀 ~ file: index.js:13 ~ getGeoPosition ~ result', result)
            const { data } = result
            const { geonames: [{ lat = -12.0266034, lng = -77.1278637 }] } = data
            
            console.log('🚀 ~ file: index.js:16 ~ getGeoPosition ~ lat', lat, lng)

            if (!lat && !lng) throw new Error('No se pudo obtener las coordenadas')

            return { lat, lng }
        }
    } catch (error) {
        console.log('🚀 ~ file: index.js:21 ~ getGeoPosition ~ error', error)
        throw new Error(error?.message)
    }
}

export async function getCountryWithCurrency(currency) {
    try {
        if (currency) {
            const { data: [{ name: { common: country = 'Peru' }, cca2: countryCode = 'PE' }] = [] } = await axios.get(`${currencyToCountryAPI}/${currency}`)
            return { country, countryCode }
        }
    } catch (error) {
        console.log('🚀 ~ file: index.js:33 ~ getCountryWithCurrency ~ error', error)
        throw new Error(error?.message)
    }
}