import { useState } from "react";
import "./style.css";
import AQCard from "./AQCard";
import { Link } from "react-router-dom";
import PollutantInfo from "./PollutantInfo";

function AirQuality() {
  const [searchInput, setSearchInput] = useState("")
  const [AQData, setAQData] = useState(null)
  const [error, setError] = useState(null)

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
        setAQData(data.data)
        setError(null)
      } 
      if(data.status === "error") {
        setError(data.data)
      }
    } catch (error) {
      console.error("NETWORK ERROR: ", error)
      console.log("error occured", error)
    }
    
  }

  return (
    <div className="aq-container">
      <div className="navigation-container">
        <Link className="" to="/">
            Home
        </Link>
      </div>

      <div className="results-container">
        <div className="aq-search-container">
          <h1>Air Quality</h1>
          <small>Find the air quality in your area </small>

          <form onSubmit={handleSubmit} className="aq-form">
            <input type="text" placeholder="enter city/country" className="form-input" onChange={handleChange} value={searchInput} />
            <button type="submit" >Search</button>
          </form>
        </div>
        {AQData !== null ? <AQCard data={AQData}  /> : null}
        {AQData !== null ? <PollutantInfo pollutant={AQData.dominentpol} aqi={AQData.aqi} /> : null}             
      </div>

      {error && (
        <div>
          <p>{error}</p>
          <small><i>*Note: Big cities are more likely to have an AQ station.</i></small>        
        </div>

      )}
    </div>
  )
}

export default AirQuality