import {currencyCrypto, payments} from '@/utils/currency'
import {useMemo} from 'react'

export const useOptions = (giveValue, getValue) => {
    return useMemo(() => {
        let giveOptions = [...currencyCrypto]
        let getOptions = [...currencyCrypto]

        if(payments.find(item => item.title === giveValue)) {
            giveOptions = [...giveOptions, ...payments]
        }else if(payments.find(item => item.title === getValue)) {
            getOptions = [...getOptions, ...payments]
        } else {
            giveOptions = [...giveOptions, ...payments]
            getOptions = [...getOptions, ...payments]
        }
        
        giveOptions = giveOptions.filter(item => item.title !== getValue)
        getOptions = getOptions.filter(item => item.title !== giveValue)
        

        return {
            giveOptions,
            getOptions
        }
    }, [giveValue, getValue])
}
