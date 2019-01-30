import React, { Component } from 'react';
import Title from './Title';
import Form from './Form';
import Data from './Data'

const API_KEY = "c554bb40fe2fbc06d1c80a751bb3b673";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      location: undefined,
      temperature: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
    this.getWeather = this.getWeather.bind(this)
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value
    const country = e.target.country.value
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const api_data = await api_call.json()
    if(city&&country){    
      console.log(api_data)
      this.setState({
        location: api_data.name,
        temperature: api_data.main.temp,
        country: api_data.sys.country,
        humidity: api_data.main.humidity,
        description: api_data.weather[0].description,
        error: ""
      })
    }
    else{
      this.setState({
        location: undefined,
        temperature: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter city and country!!!!!!!!"
      })
    }
  }

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Data 
          location={this.state.location} 
          temperature={this.state.temperature}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          />
      </div>
    );
  }
}

export default App;
