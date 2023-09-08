import {useEffect} from 'react'

export const getCurrentDimension = () => {
    return {
          width: typeof window !== "undefined" && window.innerWidth,
          height: typeof window !== "undefined" && window.innerHeight
    }
  }

export const checkSize = (screenSize, setScreenSize) => {
    useEffect(() => {
        const updateDimension = () => {
                setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);
    
    
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])
}