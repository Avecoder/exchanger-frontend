const API_URL = 'https://api.ethplorer.io'
import { convertData } from "./time"

export const getTransactionHistory = async (endpoint) => {
    try {
      const res = await fetch(`${API_URL}${endpoint}`);
      const data = await res.json()


      return data.operations
    } catch (err) {
      return err
    }
}


export const parseHistory = (history, address) => {
    return history.map((item) => {
        return {
            balance: (parseFloat(item.value) / (10 ** parseInt(item.tokenInfo.decimals) )),
            tokenName: item.tokenInfo.name,
            tokenSymbol: item.tokenInfo.symbol,
            from: item.from,
            to: item.to,
            time: convertData(item.timestamp),
            sendFrom: item.from === address?.toLowerCase() ? 'OUT' : 'IN'
        }
    })
}