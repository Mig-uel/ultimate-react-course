import { Component } from 'react'
import { Weather } from './components/weather.component'

import { convertToFlag } from './utils'
import { Input } from './components/input.components'

class App extends Component {
  state = {
    location: '',
    isLoading: false,
    displayLocation: '',
    weather: {},
    error: '',
  }

  handleChange = (e) => {
    this.setState({
      location: e.target.value,
    })
  }

  fetchWeather = async () => {
    try {
      if (this.state.location.length < 2) {
        this.setState({ weather: {} })
        return
      }

      this.setState({ isLoading: true })
      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${this.state.location}`
      )
      const geoData = await geoRes.json()
      // console.log(geoData)

      if (!geoData.results) throw new Error('Location not found')

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0)
      this.setState({
        displayLocation: `${name} ${convertToFlag(country_code)}`,
      })

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      )
      const weatherData = await weatherRes.json()
      this.setState({ weather: weatherData.daily })
    } catch (err) {
      console.error(err)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  // alt to useEffect with empty [] dependency
  componentDidMount() {
    this.setState({ location: localStorage.getItem('location') || '' })
  }

  // useEffect with [] dependency
  componentDidUpdate(prevProps, prevState) {
    if (this.state.location !== prevState.location) {
      this.fetchWeather()

      localStorage.setItem('location', this.state.location)
    }
  }

  render() {
    return (
      <div className='app'>
        <h1>Classy Weather</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <Input
            location={this.state.location}
            handleChange={this.handleChange}
          />
        </form>

        {this.state.isLoading && <p className='loader'>Loading...</p>}

        {this.state.weather?.weathercode && (
          <Weather
            weather={this.state.weather}
            location={this.state.displayLocation}
          />
        )}
      </div>
    )
  }
}

export default App
