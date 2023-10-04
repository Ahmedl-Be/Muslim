import React from 'react'
import Image from "next/image"

function SingleCart({name,time,img}) {
    return (
        <div className="bg-white flex flex-col gap-4 rounded 
        w-full">
            <div className="relative w-full h-48">
                <Image
                    src={img}
                    width={500}
                    height={500}
                    alt="pic"
                    className='w-[100%] h-[100%] object-cover'
                />
            </div>
            <div className="flex flex-col items-center justify-center
            gap-4 p-5">
                <p className="font-bold	">{name}</p>
                <h1 className="text-6xl font-light">{time}</h1>
            </div>
        </div>
    )
}

export default SingleCart