
const AQCard = ({data}) => {
    if(!data) return null

    const {aqi, city, dominentpol, time} = data
  return (
    <div className="qa-card">
        <h3>{city.name}</h3>
        <h4>Air Quality Index: <span>{aqi}</span> </h4>
        <div>
            <p>Dominant Polluant: <span> {dominentpol}</span></p>
            <p>Last Updated: <span>{time.s}</span> </p>
        </div>
 
        {/* <img src="https://i.imgur.com/ezi3vO2.png" alt="" style={{width: "800px"}} /> */}
    </div>
  )
}

export default AQCard