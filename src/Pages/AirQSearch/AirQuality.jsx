import { useState } from "react";
import "./style.css";
import AQCard from "./AQCard";

function AirQuality() {
  const [searchInput, setSearchInput] = useState("")
  const [AQData, setAQData] = useState(null)

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formattedCity = searchInput.replace(/ /g, '-')
    fetchAQData(formattedCity)

    setSearchInput("")
  }


  const fetchAQData = async (city) => {
    try {
      const response = await fetch(`https://api.waqi.info/feed/${city}/?token=${import.meta.env.VITE_AQI_TOKEN}`)
      const data = await response.json()
      console.log(data)
      if(response.ok && data.status === "ok") {
        setAQData(data)
       
      } 
    } catch (error) {
      console.error("NETWORK ERROR: ", error)
      // console.log("error occured", error)
    }
    
  }

  return (
    <div className="aq-container">
      <h1>Air Quality</h1>
      <div className="aq-search-container">
        <p>Find the air quality in your area</p>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your city" onChange={handleChange} value={searchInput} />
          <button type="submit" >Search</button>
        </form>
      </div>
      <AQCard data={AQData} />
    </div>
  )
}

export default AirQuality