import { useState, useEffect } from 'react'
import './App.css'
import BackgroundImage from './components/BackgroundImage'
import CardWeather from './components/CardWeather'

function App() {  
const [coords, setCoords] = useState()
 
 
 useEffect(() => {
   const success = pos => {
      const latlon = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(latlon)
  
   } 
   navigator.geolocation.getCurrentPosition(success)
 }, [])


 
 


 




  return (
    
    
    <div className="App" >
      <BackgroundImage  lon={coords?.lon} lat={coords?.lat}/>
      <CardWeather lon={coords?.lon} lat={coords?.lat} />
    </div>
    
  )
}

export default App
