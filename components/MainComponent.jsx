"use client"
import Head from "@/components/Head"
import Cart from "@/components/Cart"
import Dropdown from "@/components/Dropdown"
import { useEffect,useState} from "react"
import axios from "axios"

export default  function MainComponent() {
    const [timings,setTimimgs] = useState({})
    const [date,setDate] = useState("")
    const [selectedOption, setSelectedOption] = useState("Cairo");
    const handleStateChange = (newState) => {
        setSelectedOption(newState);
    };
    const getTimings = async ()=>{
        const res = await axios.get(
    `https://api.aladhan.com/v1/timingsByCity?city=${selectedOption}&country=Egy&method=8`
        );
        setTimimgs(res.data.data.timings)
        setDate(res.data.data.date.readable)
    }
    
    useEffect(()=>{
        getTimings()
    },[selectedOption])

    return (
            <div className="ml-[10%] mr-[10%] mt-16 flex flex-col
            gap-10 h-screen md:h-auto">
                <Head date={date} city={selectedOption}
                timings={timings}
                />
                <Cart timings={timings}/>
                <Dropdown state={selectedOption}
                onStateChange={handleStateChange}
                />
            </div>
    )
}
