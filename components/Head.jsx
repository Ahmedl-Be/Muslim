import React from 'react'
import CurrentTime from './CurrentTime'
import  CountDown from "./CountDown"
import { useState } from 'react'
    
const Head = ({date,city,timings}) => {

    const [nextPrayer, setNextPrayer] = useState("");
    const handleChildData = (data) => {
        setNextPrayer(data);
    };
    
    return (
        <div className='flex flex-col w-[100%]'>
            <div className='flex flex-col justify-center items-center
            md:flex-row md:justify-between 
            gap-10  w-[100%] p-5'>
                <div className='flex flex-col gap-4 items-center
                md:items-start'>
                    <span className='text-white	text-sm md:text-xl'>
                        <CurrentTime /> | {date}</span>
                    <h1 className='md:text-5xl text-2xl text-white'>
                        {city}</h1>
                </div>
            <div className="w-[100%] bg-white h-[1px] md:hidden"></div>

                <div className='flex flex-col gap-4 
                justify-center items-center  '>
                    <span className='text-white	text-sm md:text-xl '>
                        UNTIL | 
                        <span className='text-green-400 ms-2'>
                            {nextPrayer} 
                            </span>
                        </span>
                    <h1 className='md:text-5xl text-2xl text-white'>
                        {/* CountDown component */}
                        <CountDown timings={timings} 
                        onDataReceived={handleChildData}/>
                    </h1>
                </div>

            </div>
            <div className="w-[100%] bg-white h-[1px]"></div>
        </div>
    )
}

export default Head