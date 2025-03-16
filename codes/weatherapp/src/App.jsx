import React, {useState} from 'react'
import axios from 'axios'
import './App.css'

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={1fb04870efc73ec149f557ba1e9734bd}`

  return (
    <>
      <div className='app'>
        <h1>Weather App</h1>  
        <div className='container'></div>
        <div className='top'>
          <div className='location'>
            <p>City Name</p>
          </div>
          <div className='temperature'>
            <h1>32 C</h1>
          </div>
          <div className='description'>
            <p>Could</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>Feels Like: 30 C</p>
          </div>
          <div className='humidity'>
            <p>Humidity: 20%</p>
          </div>
          <div className='wind'>
            <p>Wind: 10 km/h</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
