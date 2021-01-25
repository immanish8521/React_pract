import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Styles/App.css'

const App = () => {

  const [weather, setWeather] = useState(null)

  const [place, setPlace] = useState("");

  useEffect(() => {
    axios
      .get("http://api.weatherapi.com/v1/current.json?key=698767340bb948048da144645211101&q=London")
      .then((data) => {
        setWeather(data.data)
        console.log(data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  const getLocation = (e) => {
    setPlace(e.target.value)
  }

  const searchPlace = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=698767340bb948048da144645211101&q=${place}`)
      .then((data) => {
        setWeather(data.data)
    })
  }

  return (
    <div className="App">
      
      <input onChange={getLocation} type="search" />
      <button onClick={searchPlace} >Submit</button>
      <div className="text-part">
      {weather && (
        <div>
        <p>{weather.location.name}</p>
          <h3>{weather.location.country}</h3>
          <h3>{weather.current.temp_c}°Celius</h3>
          <img src={weather.current.condition.icon} alt="" />
          <p>{weather.current.condition.text}</p>
          <h4>Cloud: {weather.current.cloud}</h4>
        </div>
        )}
        </div>
    </div>
  )
}

export default App;

