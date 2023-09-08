import { Wrapper, Button, CourseCard } from "./"
import {useState} from 'react'
import { checkSize, getCurrentDimension } from "@/handlers/windowSize"
import {motion} from 'framer-motion'

const Course = ({course, t}) => {

    const [screenSize, setScreenSize] = useState({width: 1200, height: 1200});
    const maxSize = 1024


  	checkSize(screenSize, setScreenSize)



    return (
        <div className="bg-black p-10 pb-[280px] text-white "> 
            <Wrapper>
                <h2 className="text-[36px] font-medium">{t.courseTitle}</h2>
                <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8">
                    {course?.map((item, i) => 
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 0,
                                scale: .9,
                                y: 60,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                scale: 1,
                                
                            }}
                            transition={{
                                stiffness: 400,
                                type: "spring",
                                damping: 40,
                                mass: 1,
                                delay: .05 * i
                            }}
                            viewport={{once: true}} 
                        >
            
                            <>
                                <CourseCard 
                                    
                                    small={(screenSize.width > maxSize) && (i > 7)}
                                    data={item}
                                />
                            </>
                        
                        </motion.div>)
                    }
                </div>
            </Wrapper>
        </div>
    )
}

export default Course