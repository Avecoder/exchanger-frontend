import { Wrapper, Button, Background } from "./"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {getAddress} from '@/handlers/addressInfo'
import {motion} from 'framer-motion'

const Banner = ({t}) => {
    const [address, setAddress] = useState(null)

    useEffect(() => {
        setAddress(getAddress())
    }, [])

    return (
        <div className="bg-black pt-[420px] p-10 pb-[200px] text-white ">
            <Background />
            <Wrapper>
                <div className="flex h-[100%] flex-col main-section">
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-8 items-end pb-8 border-b border-white ">
                        <div className="flex flex-col gap-12">
                            <h1 className="md:text-[96px] text-[64px] font-medium break-words main-heading">{t.title}</h1>
                            <p className="pr-[20px]">{t.subtitle}</p>
                        </div>
                        <div className="xl:cols-start-3 xl:col-end-4 flex flex-col md:items-end gap-y-20">
                            <div className="flex flex-col gap-y-2 md:items-end">
                                <span className="text-xs">{t.advantages.first}</span>
                                <span className="text-xs">{t.advantages.second}</span>
                                <span className="text-xs">{t.advantages.third}</span>
                            </div>
                            <div className="flex gap-8">
                                <Link href="/connect"><Button black border>{t.bannerBtn.first}</Button></Link>
                                <Link href={address ? `/address/${address}` : '/connect'}><Button active>{t.bannerBtn.second}</Button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 flex gap-3 items-center">
                        <span>{t.scroll}</span>
                        <div>
                            {
                                [... new Array(2)].map((item, i) => 
                                    <svg key={i} width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.92683 0.999993L5.46342 4.55341L1.00001 0.999993" stroke="white"/>
                                    </svg>
                                )
                            }
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
        
    )
}

export default Banner