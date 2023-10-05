"use client"
import Head from "@/components/Head"
import Cart from "@/components/Cart"
import Dropdown from "@/components/Dropdown"
import { useEffect,useState} from "react"
import axios from "axios"

export default  function MainComponent() {
    const [timings,setTimimgs] = useState({})
    const [arDate,setArDate] = useState("")
    const [selectedOption, setSelectedOption] = useState("Cairo");
    const handleStateChange = (newState) => {
        setSelectedOption(newState);
    };
    const getTimings = async ()=>{
        const res = await axios.get(
    `https://api.aladhan.com/v1/timingsByCity?city=${selectedOption}&country=Egy&method=8`
        );
        setTimimgs(res.data.data.timings)
        const arMonth =  res.data.data.date.hijri.month.ar
        const arDay = res.data.data.date.hijri.day
        const arYear = res.data.data.date.hijri.year
            setArDate(`${arYear} ( ${arMonth} ) ${arDay}`)
    }
    
    useEffect(()=>{
        getTimings()
    },[selectedOption])
    console.log(arDate)
    return (
            <div className="ml-[10%] mr-[10%] md:mt-16 mt-4 flex flex-col
            gap-10 h-screen md:h-auto">
                <Head date={arDate} city={selectedOption}
                timings={timings}
                />
                <Cart timings={timings}/>
                <Dropdown state={selectedOption}
                onStateChange={handleStateChange}
                />
            </div>
    )
}
