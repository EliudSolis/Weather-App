import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import backgrounds from '../assets/backgrounds'

const BackgroundImage = ({ lat, lon }) => {
    const [weather, setWeather] = useState()

    useEffect(() => {
        if (lon) {
            const APIKey = '34a188ef312b78313e6af0b757fe612e'
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`

            axios.get(URL)
                .then(res => setWeather(res.data.weather[0].main))
                .catch(err => console.log(err))
        }

    }, [lat, lon])




    var today = new Date();
    var hour = today.getHours();


    const getURLimage = (now, weather) => {
        let imgUrl = ""
        if (now < 20 && weather == "Clouds") {
            imgUrl = backgrounds.Clouds.day
        } else if (weather == "Clouds" && now >= 20) {
            imgUrl = backgrounds.Clouds.night
        } else if (weather == "Clear" && now < 20) {
            imgUrl = backgrounds.Clear.day
        } else if (weather == "Clear" && now >= 20) {
            imgUrl = backgrounds.Clear.night
        } else if (weather == "Atmosphere" && now < 20) {
            imgUrl = backgrounds.Atmosphere.day
        } else if (weather == "Atmosphere" && now >= 20) {
            imgUrl = backgrounds.Atmosphere.night
        } else if (weather == "Rain" && now < 20) {
            imgUrl = backgrounds.Rain.day
        } else if (weather == "Rain" && now >= 20) {
            imgUrl = backgrounds.Rain.night
        } else if (weather == "Drizzle" && now < 20) {
            imgUrl = backgrounds.Drizzle.day
        } else if (weather == "Drizzle" && now >= 20) {
            imgUrl = backgrounds.Drizzle.night
        } else if (weather == "Thunderstorm" && now < 20) {
            imgUrl = backgrounds.Thunderstorm.day
        } else if (weather == "Thunderstorm" && now >= 20) {
            imgUrl = backgrounds.Thunderstorm.night
        } else if (weather == "Snow" && now < 20) {
            imgUrl = backgrounds.Snow.day
        } else if (weather == "Snow" && now >= 20) {
            imgUrl = backgrounds.Snow.night
        }
        return imgUrl
    }

   


    
    const background = {
        backgroundImage: `url(${getURLimage(hour, weather)})`,
        backgroundRepeat: "no repeat",        
    }


    return (
        <div className='bckgrndimg' style={background } > </div>
    )
}

export default BackgroundImage