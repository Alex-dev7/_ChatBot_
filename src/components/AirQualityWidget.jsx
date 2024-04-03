import { useState, useEffect } from "react"
import "./AQIStyle.css"

function AirQualityWidget() {
const [airQualityData, setAirQualityData] = useState({})


useEffect(() => {
  // fetchAQIatLocation()
}, [])



const fetchAQIatLocation = async () => {
  try {
    const response = await fetch(`https://api.waqi.info/feed/here/?token=${import.meta.env.VITE_AQI_TOKEN}`)
    const data = await response.json()
    
    if(response.ok && data.status === "ok") {
      setAirQualityData(data)
      console.log(data.data.aqi)
    } 
  } catch (error) {
    console.error("NETWORK ERROR: ", error)

  }
  
}

// console.log(airQualityData.data.city.name)

  return (
    <div className="location-aqi-container">
        <h4>Air Quality</h4>
        <div>
          <span>Stillwater, New York, USA</span>
          <span>15</span>
        </div>
    </div>
  )
}

export default AirQualityWidget