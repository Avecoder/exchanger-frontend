import { Wrapper, Button, Card, Select } from "."
import {payments, currencyCrypto} from '@/utils/currency'
import { useOptions } from "@/handlers/options"
import { useState } from "react"
import useSWR from "swr"
import { fetchDataFromApi } from "@/utils/api"

const Exchangers = ({exchangers, t}) => {

    const [getValue, setGetValue] = useState(payments[0])
    const [giveValue, setGiveValue] = useState(currencyCrypto[0])
    
    
    const options = useOptions(giveValue?.title, getValue?.title)

    const { data, error, isLoading } = useSWR(
        `/exchangers?currency=${giveValue.value}-${getValue.value}&limit=50`,
        fetchDataFromApi,
        {
            fallbackData: exchangers,
        }
    )

    const updatedData = data?.map(item => {
        return {
            title: item?.title,
            changeIn: `${item?.coins[0]?.giveCurrency?.price} ${item?.coins[0]?.giveCurrency?.currency}`,
            changeOut: `${item?.coins[0]?.getCurrency?.price} ${item?.coins[0]?.getCurrency?.currency}`,
            min: `${item?.coins[0]?.min?.price} ${item?.coins[0]?.min?.currency}`,
            reserve: `${item?.coins[0]?.reserve?.price} ${item?.coins[0]?.reserve?.currency}`,
            positive: item?.posReview,
            negative: item?.negReview,
            url: item?.url
        }
    })

    return (
        <div className="px-10 pb-[280px] pt-[180px] bg-[#ecebea]" >
            <Wrapper>
                <div className="flex flex-col gap-y-8 md:flex-row justify-between items-start border-b border-black pb-8">
                    <h2 className="text-[36px] font-medium">{t.exchangers.title}</h2>
                    <div className="flex gap-8 flex-col sm:flex-row">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs">{t.exchangers.give}</span>
                            <Select options={options.giveOptions} selectedValue={giveValue} setSelectedValue={setGiveValue}/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs">{t.exchangers.get}</span>
                            <Select options={options.getOptions} selectedValue={getValue} setSelectedValue={setGetValue} />
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 gap-5">
                    {
                        !isLoading ?
                        updatedData?.map((item, i) => 
                            <div key={i} className="xl:col-start-2 md:col-start-1 md:col-end-5">
                                <Card  data={item} t={t}/>
                            </div>    
                        )
                        :
                        <div className="xl:col-start-2 md:col-start-1 md:col-end-5 h-[800px] flex justify-center pt-8">
                            <p className="uppercase font-medium">Loading ...</p>
                        </div>
                    }
                </div>
            </Wrapper>
        </div>
    )
}

export default Exchangers