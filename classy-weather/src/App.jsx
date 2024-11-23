import { Component } from 'react'

class App extends Component {
  state = {
    location: '',
  }

  handleChange = (e) => {
    this.setState((state) => ({
      ...state,
      location: e.target.value,
    }))
  }

  fetchWeather = () => {}

  render() {
    return (
      <div className='app'>
        <h1>Classy Weather</h1>

        <div>
          <input
            type='text'
            placeholder='Search for location...'
            value={this.state.location}
            onChange={this.handleChange}
          />
        </div>

        <button onClick={this.fetchWeather}>Get Weather</button>
      </div>
    )
  }
}

export default App
