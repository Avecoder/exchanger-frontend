import {Header, Footer, AddressInfo} from '@/components'
import { getAddressInfo } from '@/handlers/addressInfo'
import { getTransactionHistory } from '@/handlers/transactionHistory'
import { API_KEY_ETHPLORER } from '@/utils/urls'
import {en} from '@/locales/en'
import {ru} from '@/locales/ru'
import { useRouter } from 'next/router'


export default function Address({transactionHistory, address, info}) {

    const router = useRouter()
    const t = router.locale === 'en' ? en : ru


    return (
        <>
            <Header t={t}/>
            <AddressInfo 
                transactionHistory={transactionHistory}
                address={address}
                info={info}
                t={t}
            />
            <Footer t={t}/>
        </>
    )
  }


export const getStaticPaths = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export const getStaticProps = async ({params: {slug}}) => {
    
    const transactionHistory = await getTransactionHistory(`/getAddressHistory/${slug}?apiKey=${API_KEY_ETHPLORER}&limit=${10}`)
    const info = await getAddressInfo(slug, API_KEY_ETHPLORER)
    console.log('INFO', info)
    if (info?.error?.code == 104) {
        return {
          redirect: {
            destination: "/connect",
          },
        }
      }


    return {
        props: {
            transactionHistory,
            address: slug,
            info
        }
    }
}
  