import Image from 'next/image'
import { backgrounds } from '@/utils/gradients'

const CourseCard = ({small, data: {title, price, percent, image}}) => {

    const bgColor = backgrounds[title.replaceAll(' ', '')]


    return (
        <div className={`flex gap-5 w-full ${small ? '' : 'flex-col'}`}>
            <style jsx>{`
                .preview {
                    border: .5px solid ${bgColor};
                }

                .info {
                    width: ${small ? 'calc(100% - 90px)' : '100%'};
                }

                .arrow_percent{
                    transform: ${percent >= 0 && 'rotate(180deg)'};
                }

                .arrow_percent svg path{
                    stroke: ${percent < 0 ? '#FE6B6B' : '#0CD285' };
                }
            `}</style>
            <div className={` ${small ? 'h-[70px] w-[70px]' : 'h-[200px] w-full'} preview rounded-2xl flex items-center justify-center`}>
                <Image 
                    src={image}
                    alt="course"
                    width={small ? 30 : 100}
                    height={small ? 30 : 100}
                />
            </div>
            <div className={`flex ${small && 'items-center'} info`}>
                <div className='flex flex-col w-full'>
                    <div className='w-full flex justify-between'>
                        <span>{title}</span>
                        <div className="flex gap-2 items-center">
                            <div className="arrow_percent">
                                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92683 0.999993L5.46342 4.55341L1.00001 0.999993" stroke="white"/>
                                </svg>
                            </div>
                            <span className={`${percent < 0 ? 'text-[#FE6B6B]' : 'text-[#0CD285]'}`}>
                                {percent}%
                            </span>
                        </div>
                    </div>
                    <span>{price} $</span>
                </div>
            </div>
        </div>
    )
}


export default CourseCard