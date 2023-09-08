import Link from 'next/link'
import { checkSize } from "@/handlers/windowSize"
import {useEffect, useState} from 'react'
import { getAddress } from '@/handlers/addressInfo'
import { scrollTo } from "next/router"

const Header = ({black, t, scroll}) => {
    
    const [showMobile, setShowMobile] = useState(false)
    const [address, setAddress] = useState('')

    const [screenSize, setScreenSize] = useState({width: 1024, height: 1024});
    const maxSize = 600


  	checkSize(screenSize, setScreenSize)

    useEffect(() => {
        setAddress(getAddress())
    }, [])

    return (
        <div className={`w-full   ${black ? 'text-white bg-black' : 'bg-[#ecebea]'} ${screenSize.width > 600 && 'p-10'} `}>
            {
                screenSize.width > maxSize ?
                <div>
                    <ul className="flex justify-between">
                        <li><Link href="/">Ano<span className="font-semibold">Exchange</span></Link></li>
                        <li><Link href="/connect">{t.navbar.first}</Link></li>
                        <li onClick={scroll} className='cursor-pointer'>{t.navbar.second}</li>
                        <li><Link href={address ? `/address/${address}` : 'connect'}>{t.navbar.third}</Link></li>
                    </ul>
                </div>
                :
                <div className='w-[100vw] fixed z-20'>
                    <div className=" flex justify-between items-center bg-black p-10">
                        <Link href="/">Ano<span className="font-semibold">Exchange</span></Link>
                        <img src="/menu.svg" alt="icon menu" className="cursor-pointer" onClick={() => setShowMobile(!showMobile)}/>
                    </div>
                    {
                        showMobile &&
                        <div>
                            <ul className="flex flex-col items-center gap-8 pt-16 w-[100%] h-[100vh] bg-black ">
                                <li className="font-medium text-[18px] uppercase"><Link href="/connect">{t.navbar.first}</Link></li>
                                <li className="font-medium text-[18px] uppercase" onClick={() => scrollTo("exchangers", 100)}>{t.navbar.second}</li>
                                <li className="font-medium text-[18px] uppercase"><Link href={address ? `/address/${address}` : 'connect'}>{t.navbar.third}</Link></li>
                            </ul>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Header