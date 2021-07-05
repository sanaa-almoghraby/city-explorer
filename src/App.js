
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
      showMap:false,
      weathSelected:[]
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
      showMap:true
    })
    // =======================================

    let url2=`https://class07-back-end.herokuapp.com/getCityInfo?cityy=${this.state.showDataofCity}&format=json`


    let weather = await axios.get(url2)
    await this.setState({
      WeatherInformation: weather.data,
    
    })
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
        <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`}/>}
        <Weather />
      </div>
    )
  }
}

export default App;
