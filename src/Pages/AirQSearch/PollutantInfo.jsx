import { useState } from 'react';
import './style.css'
import { useEffect } from 'react';


const PollutantInfo = ({ pollutant, aqi }) => {
    const [status, setStatus] = useState({})

    useEffect(() => {
        getAQIInfo(aqi)
    }, [aqi])

    if (!pollutant) return null;



  const getPollutantInfo = (pollutant) => {
    switch (pollutant) {
      case 'pm25':
        return 'PM2.5 are tiny particles in the air that reduce visibility and cause the air to appear hazy when levels are elevated. They can be a result of burning fossil fuels and chemical reactions.';
      case 'pm10':
        return 'PM10 are inhalable particles that are small enough to penetrate the thoracic region of the respiratory system. They can originate from dust stirred by vehicles on roads, wood burning, and other industrial activities.';
      case 'o3':
        return 'Ozone (O3) is a gas that occurs both in the Earth\'s upper atmosphere and at ground level. It can be good or bad for health and the environment, depending on its location in the atmosphere.';
      case 'no2':
        return 'Nitrogen Dioxide (NO2) primarily gets in the air from burning fuel. It can cause respiratory problems and contribute to the formation of other pollutants.';
      case 'so2':
        return 'Sulfur Dioxide (SO2) is produced from burning fossil fuels (coal and oil) and from smelting mineral ores. It can cause respiratory issues and contribute to the formation of other pollutants.';
      case 'co':
        return 'Carbon Monoxide (CO) is a harmful pollutant produced primarily from car exhausts. It is colorless, odorless, and can cause health problems at high levels.';
      default:
        return 'No information available for the pollutant.';
    }
  };


  function getAQIInfo(aqi) {
    if (aqi <= 50) {
      setStatus({level: "Good", implications: "Air quality is considered satisfactory, and air pollution poses little or no risk.", color: 'green'})
      return 0
    } else if (aqi <= 100) {
      setStatus({level: "Moderate", implications: "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.", color: 'yellow'})
      return 0
    } else if (aqi <= 150) {
      setStatus({level: "Unhealthy for Sensitive Groups", implications: "Members of sensitive groups may experience health effects. The general public is not likely to be affected.", color: 'orange'})
      return 0;
    } else if (aqi <= 200) {
      setStatus({level: "Unhealthy", implications: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.", color: 'red'})
      return 0;
    } else if (aqi <= 300) {
      setStatus({level: "Very Unhealthy", implications: "Health warnings of emergency conditions. The entire population is more likely to be affected.", color: 'purple'})
      return 0;
    } else {
      setStatus({level: "Hazardous", implications: "Health alert: everyone may experience more serious health effects. Everyone should avoid all outdoor exertion.", color: 'maroon'})
      return 0;
    }
  }
  
  

  return (
    <>
      <div className="pollutant-card">
        <div >
            <h4 className="card-title">{pollutant.toUpperCase()} Information</h4>
            <p className="card-text">{getPollutantInfo(pollutant)}</p>
        </div>
      </div>
      <div className="pollutant-card" style={{backgroundColor: status.color, opacity: "0.7"}}>
        <div >
            <h4 className="card-title">AQI {aqi}</h4>
            <h5>Level: {status.level}</h5>
            <p className="card-text">{status.implications}</p>
        </div>
      </div>
    </>

  );
};

export default PollutantInfo;