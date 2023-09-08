import Button from './Button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {getAddress} from '@/handlers/addressInfo'

const Footer = ({black, t}) => {
    const [address, setAddress] = useState(null)

    useEffect(() => {
        setAddress(getAddress())
    }, [])

    return (
        <div className={`flex flex-col md:flex-row justify-between gap-y-8 items-center ${black ? 'text-white bg-black' : ' bg-[#ecebea]'} p-10`}>
            <div className='flex gap-x-8 flex-col md:flex-row items-center gap-y-8'>
                <Link href="/"><Button black={black} border>{t.footer.first}</Button></Link>
                <Link href="/connect"><Button black={black} border>{t.footer.second}</Button></Link>
                <Link href={address ? `/address/${address}` : '/connect'}><Button black={black} border>{t.footer.third}</Button></Link>
            </div>
            <span><Link href="/">Ano<span className="font-semibold">Exchange</span></Link></span>
        </div>
    )
}

export default Footer