
import './App.css';
import React from 'react';
import axios from 'axios';
import Weather from './Weather';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      showDataofCity: '',
      showMap: false,
      WeatherData: []
    }
  }
  gitdataLocation = async (e) => {
    e.preventDefault();


    await this.setState({
      showDataofCity: e.target.city.value
    })


    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.showDataofCity}&format=json`;
    let resData = await axios.get(url);

    console.log(resData);
    console.log(resData.data);
    this.setState({
      cityData: resData.data[0],
      showMap: true
    })
    // =======================================

    this.funwether();
  }
  funwether = async () => {
    // let city=this.state.showDataofCity
    const city = this.state.showDataofCity.charAt(0).toUpperCase() + this.state.showDataofCity.slice(1);

    let url2 = `http://class07-back-end.herokuapp.com/getCityInfo?cityy=${city}&format=json`
    console.log(url2);
    console.log(this.state.showDataofCity);
    let weather = await axios.get(url2);
    console.log('ssssssssss');
    console.log(weather);

    this.setState({

      WeatherData: weather.data,

    })
    console.log(this.state.WeatherData);
    console.log(this.state.WeatherData.description);


  }
  render() {
    console.log(this.state.WeatherData);

    return (
      <div className='main'>
        <h1>City Explorer </h1>
        {/* <button onClick={this.gitdataLocation}>Explore!</button> */}
        <form onSubmit={this.gitdataLocation} className="form">
          <input type="text" placeholder="Name of the city" name="city" />
          <button type="submit"> Explore! </button>
        </form>
        <p>City Name :{this.state.cityData.display_name}</p>
        <p>Latitude :{this.state.cityData.lat}</p>
        <p>Longitude :{this.state.cityData.lon}</p>
        {this.state.showMap &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`} />}
        <Weather WeatherData={this.state.WeatherData}/>
      </div>
    )
  }
}

export default App;
