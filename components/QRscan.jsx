import {QrReader} from 'react-qr-reader'
import {Button} from './'
import {useRouter} from 'next/navigation'
import {useState, createRef} from 'react'

const QRscan = ({t, setShowQR}) => {

    const redirect = useRouter()
    const [isUnmounted, setIsUnmounted] = useState(false)
    const qrRef = createRef()

    const handleScan = (data) => {
        console.log(data)
    }

    const handleError = (error) => {
        console.error(error);
    }

    const handleResult = (result) => {
        if(result?.text?.indexOf('ethereum') == 0) {
            setIsUnmounted(true)
            const address = result?.text?.replaceAll('ethereum:', '')?.split('@')[0]
            redirect.push(`/address/${address}`)
            if(typeof window !== "undefined") localStorage.setItem("address", address)
            qrRef.current.stop()
            return
        }
    }


    return (
        <div className='z-20 fixed h-[100vh] sm:w-[400px] w-[100%] py-20 px-10 right-0 top-0 bg-[#ecebea] flex flex-col gap-10'>
            <h2 className='font-medium text-[24px] text-black'>{t.connect.qrTitle}</h2>
            <div>
                {
                    !isUnmounted &&
                    <QrReader
                        delay={300}
                        ref={qrRef}
                        constraints={{facingMode: 'environment'}}
                        onError={handleError}
                        onScan={handleScan}
                        onResult={handleResult}
                        videoStyle={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                    />
                }
            </div>
            <Button border onClick={() => setShowQR(false)}>{t.connect.qrButton}</Button>
        </div>
    )
}

export default QRscan