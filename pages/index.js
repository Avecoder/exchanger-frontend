
import { Header, Footer, Banner, Course, Exchangers } from '@/components'
import { fetchDataFromApi } from '@/utils/api'
import {en} from '@/locales/en'
import {ru} from '@/locales/ru'
import { useRouter } from 'next/router'
import {createRef} from 'react'

export default function Home({course, exchangers}) {
    const router = useRouter()
    const t = router.locale === 'en' ? en : ru
    const ref = createRef()

    const handleClick = () => {
        console.log(ref)
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <>
            <Header black t={t} scroll={handleClick}/>
            <Banner t={t}/>
            <Course course={course} t={t}/>
            <div ref={ref}>
                <Exchangers exchangers={exchangers} t={t}/>
            </div>
            <Footer t={t}/>
        </>
    )
  }

export const getStaticProps = async  () => {
    const course = await fetchDataFromApi('/hash-coins/explorer')
    const exchangers = await fetchDataFromApi('/exchangers?currency=BTC-USDT&limit=30')
    

    return {
        props: {
            course,
            exchangers
        }
    }
}