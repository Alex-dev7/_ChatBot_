export const fetchAQIatLocation = async () => {
    try {
     
      let data;
  
      // Check if data is in localStorage
      const cachedData = localStorage.getItem('airQualityData');
      const cacheTime = localStorage.getItem('airQualityDataTimestamp');
  
      if (cachedData && cacheTime && (new Date().getTime() - cacheTime ) < 12 * 60 * 60 * 1000) {
        // Parse the data back into a JavaScript object
        data = JSON.parse(cachedData);
      } else {
        const response = await fetch(`https://api.waqi.info/feed/here/?token=${import.meta.env.VITE_AQI_TOKEN}`);
        data = await response.json();
  
        // Only save the data in localStorage if the fetch was successful
        if (response.ok && data.status === "ok") {
          
          localStorage.setItem('airQualityData', JSON.stringify(data));
           // data is cached in localStorage for 12 hours
          localStorage.setItem('airQualityDataTimestamp', new Date().getTime());
        }
      }
  
      if (data.status === "ok") {
        return data 
      }
    } catch (error) {
      console.error("NETWORK ERROR: ", error);
    }
  }
  