import { useState, useEffect } from "react"
import "./AQIStyle.css"

function AirQualityWidget() {
const [airQualityData, setAirQualityData] = useState(null)
const [status, setStatus] = useState(null)
const [background, setBackground] = useState(null)
const [hover, setHover] = useState(false)


useEffect(() => {
  fetchAQIatLocation()
}, [])



const fetchAQIatLocation = async () => {
  try {
    const response = await fetch(`https://api.waqi.info/feed/here/?token=${import.meta.env.VITE_AQI_TOKEN}`)
    const data = await response.json()
    
    if(response.ok && data.status === "ok") {
      setAirQualityData(data)
      setBackground(getAQIColor(data.data.aqi))
    } 
  } catch (error) {
    console.error("NETWORK ERROR: ", error)
    // console.log("error occured", error)
  }
  
}

function getAQIColor(aqi) {
  if (aqi <= 50) {
    setStatus({level: "Good", implications: "Air quality is considered satisfactory, and air pollution poses little or no risk."})
    return 'green';
  } else if (aqi <= 100) {
    setStatus({level: "Moderate", implications: "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."})
    return 'yellow';
  } else if (aqi <= 150) {
    setStatus({level: "Unhealthy for Sensitive Groups", implications: "Members of sensitive groups may experience health effects. The general public is not likely to be affected."})
    return 'orange';
  } else if (aqi <= 200) {
    setStatus({level: "Unhealthy", implications: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects."})
    return 'red';
  } else if (aqi <= 300) {
    setStatus({level: "Very Unhealthy", implications: "Health warnings of emergency conditions. The entire population is more likely to be affected."})
    return 'purple';
  } else {
    setStatus({level: "Hazardous", implications: "Health alert: everyone may experience more serious health effects. Everyone should avoid all outdoor exertion."})
    return 'maroon';
  }
}




  return <>
  { airQualityData ? 
    <div
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    className="location-aqi-container">
        <div className="name-container">
          <span>Air Quality: {status.level}</span> 
          <span className="city-name">{airQualityData.data.city.name}</span>
        </div>
        <div className="number-container"
        style={{backgroundColor: background}}
        >
          <span className="aqi">{airQualityData.data.aqi}</span>
        </div>
    </div> 
    : null
  }
  </>

  
}

export default AirQualityWidget