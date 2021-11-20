import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const Currentweather = ({temp,windspeed,windir}) => {
  return(<>
  <p><b>temperature: </b>{temp}</p><br/>
     <p><b>wind</b>{windspeed} mph direction {windir}</p>
  </>)
}
const Weather = ({country}) => {
    const [weather, setWeather] = useState([])
    useEffect(() => {
      const api_key = process.env.REACT_APP_API_KEY
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${country}&aqi=no`)
    .then(response => 
    setWeather(response.data))}
    ,[])
    console.log(weather);
    const test =weather.current
    return(<>
     <h2>Weather in {country}</h2>
     <Currentweather temp={test.temp_c} windspeed={test.wind_mph} windir={test.wind_dir} />
        </>)
}
const ResultNations = ({search, nations, setSearch}) => {
    let filtering = new RegExp(search,'i')
    let nationList = nations.filter(nation => filtering.test(nation.name.common))
    if (nationList.length > 10) {
      return (<div>Too many matches, specifies another filter</div>)
    } else if (nationList.length===1) {
      return (
        <div>
          <h1>{nationList[0].name.common}</h1>
          <p>capital {nationList[0].capital[0]}<br/>
          population {nationList[0].population}
          </p>
          <h2>languages</h2>
          <ul>
         {Object.entries(nationList[0].languages).map(language => <li key={language[1]}>{language[1]}</li>)}
          </ul>
          <img src={nationList[0].flags.png} alt="flag-img"/>
          <Weather country={nationList[0].capital} />
        </div>
      )}
      else {
        return(<>
        {nationList.map(nation => {return(
        <p key={nation.name.common}>{nation.name.common}<button type="submit" onClick={() => setSearch(nation.name.common)}>show</button></p>)
    })}
        </>)
      }
    }
export default ResultNations