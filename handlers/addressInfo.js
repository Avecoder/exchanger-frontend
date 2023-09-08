const API_URL = 'https://api.ethplorer.io'

export const getAddressInfo = async (address, apiKey) => {
    try {
      const res = await fetch(`${API_URL}/getAddressInfo/${address}?apiKey=${apiKey}`);
      const data = await res.json()


      return data
    } catch (err) {
      return err
    }
}

export const getAddress = () => typeof window !== "undefined" && localStorage.getItem('address')