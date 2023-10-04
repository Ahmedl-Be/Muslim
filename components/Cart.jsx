import SingleCart from "./SingleCart"

import Fajr from "@/public/assets/fajr-prayer.png";
import Dhhr from "@/public/assets/dhhr-prayer-mosque.png";
import Asr from "@/public/assets/asr-prayer-mosque.png";
import Magreb from "@/public/assets/sunset-prayer-mosque.png";
import Asha from "@/public/assets/night-prayer-mosque.png";


const Cart = ({timings}) => {
    return (
        <div 
        className="w-[100%] flex md:flex-row  item-center
        overflow-x-auto
        gap-4 flex-col">
            <SingleCart name="الفجر" time = {timings.Fajr} img={Fajr}/>
            <SingleCart name="الضهر" time={timings.Dhuhr} img={Dhhr}/>
            <SingleCart name="العصر" time={timings.Asr}  img={Asr}/>
            <SingleCart name="المغرب" time={timings.Maghrib} img={Magreb}/>
            <SingleCart name="العشاء" time={timings.Isha} img={Asha}/>
        </div>
    )
}

export default Cart;