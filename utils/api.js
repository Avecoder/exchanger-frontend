import {SERVER_URL} from './urls'

export const fetchDataFromApi = async (endpoint) => {
    

    const res = await fetch(`${SERVER_URL}${endpoint}`)
    const data = await res.json()

    return data
};