import axios from 'axios'

const geoPosAPI = process.env.REACT_APP_MAP
const currencyToCountryAPI = process.env.REACT_APP_CURRENCY_TO_COUNTRY
export const BING_MAP_TOKEN = process.env.REACT_APP_BING_TOKEN

export async function getGeoPosition(country) {
    try {
        if (country) {
            const parsedURL = geoPosAPI.replace('COUNTRYNAME', country)
            const result = await axios.get(parsedURL)
            const { data } = result
            const { geonames: [{ lat = -12.0266034, lng = -77.1278637 }] } = data

            if (!lat && !lng) throw new Error('No se pudo obtener las coordenadas')

            return { lat, lng }
        }
    } catch (error) {
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
        throw new Error(error?.message)
    }
}