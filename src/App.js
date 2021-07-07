
import './App.css';
import React from 'react';
import axios from 'axios';
import Weather from './component/Weather';
import Movies from './component/Movies';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: {},
      showDataofCity: '',
      showMap: false,
      WeatherData: [],
      moviesData: [],
      showErr:false
    }
  }
  gitdataLocation = async (e) => {
    e.preventDefault();

try{
    await this.setState({
      showDataofCity: e.target.city.value
    })

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.showDataofCity}&format=json`;

    let resData = await axios.get(url);




    // console.log(resData);
    // console.log(resData.data[0]);

    await this.setState({
      cityData: resData.data[0],
      showMap: true
    })
    // =======================================

    this.funwether();
  }
    catch (err) {
      this.setState({
        showErr: true,
        showMap: false
      })
    }
  }

  funwether = async () => {
    // let city=this.state.showDataofCity
    // const city = this.state.showDataofCity.charAt(0).toUpperCase() + this.state.showDataofCity.slice(1);

    // let url2 = `http://class07-back-end.herokuapp.com/getCityInfo?cityy=${city}&format=json`
    // console.log(url2);
    // console.log(this.state.showDataofCity);
    // let weather = await axios.get(url2);
    // console.log('ssssssssss');
    // console.log(weather);
    // =====================================================================
    console.log('ssssss');
    // localhost:3001/getCityInfo?cityy=Amman
    let weatherInf = await axios.get(`${process.env.REACT_APP_API}getCityInfo?cityy=${this.state.showDataofCity}`)
    let moviesInf = await axios.get(`${process.env.REACT_APP_API}moviedata?movieName=${this.state.showDataofCity}`)

    this.setState({

      WeatherData: weatherInf.data,
      moviesData:moviesInf.data,
      showErr:false

    })
    console.log('ssss',this.state.WeatherData);
    console.log(weatherInf);

  }

  render() {

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
        <Weather WeatherData={this.state.WeatherData} />
        <Movies moviesData={this.state.moviesData} />
      </div>
    )
  }
}

export default App;
