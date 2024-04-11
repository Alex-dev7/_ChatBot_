
const AQCard = ({data}) => {
    if(!data) return null

    const {aqi, city, dominentpol, time} = data
  return (
    <div className="qa-card">
        <h4>Location: <span>{city.name}</span></h4>
        <div>
            <p>Air Quality Index: <span>{aqi}</span> </p>
            <p>Dominant Polluant: <span> {dominentpol}</span></p>
            <p>Last Updated: <span>{time.s}</span> </p>
        </div>
 
        {/* <img src="https://i.imgur.com/ezi3vO2.png" alt="" style={{width: "800px"}} /> */}
    </div>
  )
}

export default AQCard