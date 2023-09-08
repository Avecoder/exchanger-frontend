import { useEffect, useRef, useState} from "react"
import { motion, AnimatePresence } from "framer-motion"


const Select = ({options, selectedValue, setSelectedValue}) => {

    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef(null)


    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false)
        }
    }


    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [])

    const handleSelect = (value) => {
        setSelectedValue(value)
        setIsOpen(false)
    }

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative cursor-pointer " ref={ref}>
            <div
                onClick={handleToggle}
                className="px-3 py-1 w-[210px] flex items-center justify-between font-medium border border-black leading-3 border-1.5 rounded-3xl uppercase"
            >
                <span>{selectedValue?.title}</span>
                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.92683 0.999993L5.46342 4.55341L1.00001 0.999993" stroke="black"/>
                </svg>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 1, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ mass: 0.5, type: "spring", stiffness: 200 }}
                        className='absolute mt-5 w-full bg-[#ecebea] overflow-hidden z-10 '
                    >
                        <ul className='list-none flex flex-col text-sm overflow-y-scroll max-h-80'>
                            {options.map((option, index) => (
                                <li key={index} className="px-5 py-3 pr-9 border border-b border-black hover:bg-black hover:text-white cursor-pointer" onClick={() => handleSelect(option)}>
                                    {option.title}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            <style jsx>{`
                ::-webkit-scrollbar {
                    width: 8px;
                    background-color: #f5f5f5;
                }
                  
                /* Изменяем цвет дорожки скроллбара */
                ::-webkit-scrollbar-track {
                background-color: #ecebea;
                }
                
                /* Изменяем стиль и цвет ползунка скроллбара */
                ::-webkit-scrollbar-thumb {
                background-color: #000;
                }
            `}</style>
        </div>
    );
}

export default Select