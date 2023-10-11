"use client"
import { useEffect, useState } from "react";
import moment from "moment";
import momentTimezone from "moment-timezone";

function CountDown({ timings, onDataReceived }) {
    const [nextPrayerIndex, setNextPrayerIndex] = useState();
    const [CountDownTime, setCountDownTime] = useState()
    // const momentNow = moment();
    const momentNow = momentTimezone.tz(moment(),"Africa/Cairo");

    const prayingTime = [
        { Fajr: timings.Fajr },
        { Sunrise: timings.Sunrise },
        { Dhuhr: timings.Dhuhr },
        { Asr: timings.Asr },
        { Maghrib: timings.Maghrib },
        { Isha: timings.Isha }
    ];

    useEffect(() => {
        let interval = setInterval(() => {
            CountDownToNextPrayer()
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [timings,nextPrayerIndex,momentNow])
    
    useEffect(()=>{
        setupNextPray()
    },[timings,nextPrayerIndex])

    useEffect(()=>{
        if(CountDownTime == "0:0:0"){
            // console.log("Reach Zero")
            window.location.reload();
        }
    },[CountDownTime])


    // Handling the Next prayer
    let prayingArr = []
    let prayingNamesArr = []
    prayingTime.forEach(timeObj => {
        const key = Object.keys(timeObj)[0];
        const time = timeObj[key];
        prayingArr.push(time)
        prayingNamesArr.push(key)
    });

    const setupNextPray = () => {
        let prayerIndex = null
        for (let i = 0; i < prayingArr.length - 1; i++) {
            if (momentNow.isAfter(moment(prayingArr[i], "hh:mm"))
                && momentNow.isBefore(moment(prayingArr[i + 1], "hh:mm"))) {
                prayerIndex = i + 1
                break;
            }
            prayerIndex = 0
        }
        setNextPrayerIndex(prayerIndex);
        onDataReceived(prayingNamesArr[nextPrayerIndex])
    }


    const CountDownToNextPrayer = () => {
        const currentTime = moment();
        const NextPryerTime = prayingArr[nextPrayerIndex]
        const nextPrayerTimeMoment =
        momentTimezone.tz(NextPryerTime, "hh:mm", "Africa/Cairo");
        let remainingTime = nextPrayerTimeMoment.diff(currentTime)

        if (remainingTime < 0) {
            const midnightDiff = 
            moment("23:59:59", "hh:mm:ss").diff(momentNow);
            const fajrToMidnightDiff = 
            nextPrayerTimeMoment.diff(moment("00:00:00", "hh:mm:ss"));
            const totalDiffernce = midnightDiff + fajrToMidnightDiff;
            remainingTime = totalDiffernce;
        } 
        const durationRemainingTime = moment.duration(remainingTime)

        setCountDownTime(
            `${durationRemainingTime.hours()}:${durationRemainingTime.minutes()}:${durationRemainingTime.seconds()}`
        )
        // console.log(remainingTime)
    }

    return (
        <div >
            {CountDownTime}
        </div>
    );
}

export default CountDown;
