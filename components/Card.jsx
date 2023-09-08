
import {Button} from './'
import Link from 'next/link'
import {motion} from 'framer-motion'
import Image from 'next/image'

const Card = ({
    data: {
        title, 
        changeIn, 
        changeOut, 
        min, 
        reserve, 
        positive, 
        negative, 
        url,
        balance,
        from,
        sendFrom,
        time,
        to,
        tokenName,
        tokenSymbol,
    },
    t
}) => {

    

    return (
        (!url && balance) || url ?
        <motion.div 
            initial={{
                opacity: 0,
                y: 60,
            }}
            whileInView={{
                y: 0,
                opacity: 1,
                
            }}
            transition={{
                stiffness: 400,
                type: "spring",
                damping: 40,
                mass: 1,
                delay: .05
            }}
            viewport={{once: true}}
            className="py-8 md:grid md:grid-cols-3 flex-nowrap gap-5 flex flex-col border-b border-black">
            <div className="gap-1 flex flex-col">
                {
                    balance ? <p className='font-medium text-lg'>{balance} {tokenSymbol}</p> : <p className='font-medium text-lg'>{title}</p>
                }
                {
                    time
                    ?
                    <span>{t.address.timeInfo == 'en' ? time.en : time.ru}</span>
                    :
                    <div className="flex gap-3">
                        <span>{changeIn}</span>
                        <Image src="/exch.svg" alt="exch" width={17} height={13} />
                        <span>{changeOut}</span>
                    </div>
                }
                
            </div>
            <div>
                {from ? <p><span className='font-medium'>{t.address.from} </span>{from}</p> : <p><span className='font-medium'>{t.exchangers.min}</span>{min}</p>}
                {to ? <p><span className='font-medium'>{t.address.to} </span>{to}</p> : <p><span className='font-medium'>{t.exchangers.reserve}</span>{reserve}</p>}
            </div>
            <div className='flex flex-col md:items-end gap-2'>
                {
                    tokenName ?
                    <p>{tokenName}</p>
                    :
                    <p><span className={positive > 0 && 'text-[#0CD285]'}>{positive}</span> / <span className={negative > 0 && 'text-[#FE6B6B]'}>{negative}</span></p>
                }
                {
                    sendFrom 
                    ? 
                    <p className='font-medium'>{sendFrom === 'OUT' ? t.address.sentByYou : t.address.sentYou}</p>
                    :
                    <Link
                        href={url}
                        target='_blank'
                    >
                
                        <Button border>{t.exchangers.button}</Button>
                    </Link>
                }
                
            </div>
        </motion.div>
        :
        <></>
    )
}


export default Card