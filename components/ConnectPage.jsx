import { useState, lazy, Suspense } from 'react'
import {Wrapper, Button, Input, Background} from './'
import {getMetamaskAddress } from '@/handlers/web3'
import {useRouter} from 'next/navigation'
const QRscan = lazy(() => import('./QRscan'))


const ConnectPage = ({t}) => {
    const [input, setInput] = useState('')
    const [showQR, setShowQR] = useState(false)

    const redirect = useRouter()

    const getAddress = async () => {
        const data = await getMetamaskAddress()
        if(data) {
            await redirect.push(`/address/${data}`)
            if(typeof window !== "undefined") localStorage.setItem("address", data)
        }
    }

   

    const inputAddress = (e) => {
        if(e.code == 'Enter' && input.trim().length > 0) {
            redirect.push(`/address/${input.trim()}`)
            if(typeof window !== "undefined") localStorage.setItem("address", input.trim())
        }
    }

    return (
        <div className="h-[90vh] px-10 pt-[280px] bg-black text-white ">
            <Background />
            <Wrapper>
                <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-5 connect'>
                    <div>
                        <h1 className='font-medium text-[36px]'>{t.connect.title}</h1>
                    </div>
                    <div className='flex flex-col gap-7 pt-4'>
                        <h2 className='font-medium text-[24px]'>{t.connect.screenTitle}</h2>
                        <Button onClick={() => setShowQR(true)}>{t.connect.screenButton}</Button>
                    </div>
                    <div className='flex flex-col gap-8 pt-4'>
                        <h2 className='font-medium text-[24px]'>{t.connect.metamskTitle}</h2>
                        <Button onClick={getAddress}>{t.connect.metamaskButton}</Button>
                    </div>
                    <div className='flex flex-col gap-7 pt-4'>
                        <h2 className='font-medium text-[24px]'>{t.connect.inputTitle}</h2>
                        <Input 
                            value={input} 
                            setValue={setInput} 
                            placeholder={t.connect.inputPlaceholder} 
                            onKeyDown={inputAddress}
                        />
                        
                    </div>
                    
                    
                </div>
            </Wrapper>

            {
                showQR &&
                <Suspense>
                    <QRscan setShowQR={setShowQR} t={t} />
                </Suspense>
            }
        </div>
    )
}

export default ConnectPage