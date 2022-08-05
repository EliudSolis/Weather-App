import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'


const CardWeather = ({ lat, lon }) => {

  const [weather, setWeather] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (lon) {
      const APIKey = '34a188ef312b78313e6af0b757fe612e'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`

      axios.get(URL)
        .then(res =>{
          setWeather(res.data)
          setIsLoading(false)
        })
        .catch(err => console.log(err))
    }
    

  }, [lat, lon])



  const icon = weather?.weather[0].icon
  const scaleC = (weather?.main.temp - 273.15).toFixed()
  const scaleF = (scaleC * 9 / 5 + 32).toFixed()
  const state = weather?.weather[0].main
  const hour = (new Date).getHours();

  console.log(hour)


  const changeColor = (state, hour) => {
    let color = ""
    if (state == "Clear" && hour < 20) {
      color = "black"
    }

    if (state == "Clouds" && hour < 20) {
      color = "black"
    }

    if (state == "Snow" && hour < 20) {
      color = "black"
    }

    return color
  }

  // const changeShadow = (state) => {
  //   let shadow = ""
  //   if (state == "Snow" && hour < 20) {
  //     shadow = "0 0 5px black"
  //   }


  //   return shadow

  // }
 

  const objColor = {
    color: changeColor(state, hour),
   
  }

  const [scale, setScale] = useState(true)



  const changeScale = () => {
    if (!scale) { setScale(true) }
    else { setScale(false) }
  }


if(isLoading){
 return (
 <LoadingScreen/>
 )
}else{
 return (
    <article className='card' id='card' style={objColor} >

      <h1 className='card__temp'>{scale ? scaleC : scaleF}{scale ? "°C" : "°F"}</h1>
      <img className='card__icon' src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="" />
      <li>{weather?.weather[0].main}</li>
      <h2>{weather?.name}</h2>
      <h3>{weather?.sys.country}</h3>
      <li className='card__wind'> <i className='bx bx-wind'></i> {weather?.wind.speed} m/s</li>
      <button className='card__btn' style={objColor} onClick={changeScale}>Change to {scale ? "°F" : "°C"}</button>

    </article>
  )
}

 
}

export default CardWeather