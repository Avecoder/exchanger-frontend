import {Header, Footer, ConnectPage} from '@/components'
import {en} from '@/locales/en'
import {ru} from '@/locales/ru'
import { useRouter } from 'next/router'

export default function Connect() {
    const router = useRouter()
    const t = router.locale === 'en' ? en : ru

    return (
        <>
            <Header black t={t}/>
            <ConnectPage t={t}/>
            <Footer black t={t}/>
        </>
    )
}