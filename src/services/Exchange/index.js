import axios from 'axios'

const exchangeAPI = process.env.REACT_APP_EXCHANGE_URL

export async function getCurrencies() {
    return await axios.get(exchangeAPI)
}
