import { useState } from 'react'
import {Wrapper, Button, Card} from './'
import {getTransactionHistory, parseHistory} from '@/handlers/transactionHistory'
import useSWR from 'swr'
import { API_KEY_ETHPLORER } from '@/utils/urls'

const AddressInfo = ({transactionHistory, address, info, t}) => {

    

    const [limit, setLimit] = useState(10)

    const { data, error, isLoading } = useSWR(
        `/getAddressHistory/${address}?apiKey=${API_KEY_ETHPLORER}&limit=${limit}`,
        getTransactionHistory,
        {
            fallbackData: transactionHistory,
        }
    )

    const history = parseHistory(data, address)

    

    return (
        <div className="px-10 bg-[#ecebea]">
            <Wrapper>
                <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-5 sm:py-60 py-32 border-b border-black'>
                <div className='flex flex-col gap-3'>
                        <h2 className='font-medium text-[36px]'>{info?.ETH?.balance?.toFixed(6)} ETH</h2>
                        <p className='text-md'>{(info?.ETH?.balance * info?.ETH?.price?.rate).toFixed(2)} USD</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h2 className='font-medium text-[36px]'>{t.address.countTitle}</h2>
                        <p className='text-md'><span className='font-medium'>{t.address.countSubtitle}</span> {info?.tokens?.length}</p>
                    </div>
                    
                    <div className='flex flex-col gap-3'>
                        <h2 className='font-medium text-[36px]'>{t.address.address}</h2>
                        <p className='text-md break-words'>{address}</p>
                    </div>
                    <div className='flex flex-col gap-3 xl:items-end'>
                        <h2 className='font-medium text-[36px]'>{t.address.copy}</h2>
                        <Button border>{t.address.copyButton}</Button>
                    </div>
                </div>
                <div className='grid xl:grid-cols-4 gap-5 pb-[200px]'>
                    <div className='pt-8'>
                        <h3 className="text-[36px] font-medium">{t.address.titleTransaction}</h3>
                    </div>
                    {
                        history.map((item, i) => 
                            <div className="xl:col-start-2 xl:col-end-5" key={i}>
                                <Card  data={item} t={t}/>
                            </div>    
                        )
                    }
                    <div className="xl:col-start-2 xl:col-end-5" >
                        <Button border onClick={() => {setLimit(limit + 10)}}>{t.address.addMore}</Button>
                    </div>
                </div>
                
                
            </Wrapper>
        </div>
    )
}


export default AddressInfo