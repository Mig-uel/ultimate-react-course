import { Component } from 'react'

import { Day } from './day.component'
import PropTypes from 'prop-types'

export class Weather extends Component {
  render() {
    const {
      temperature_2m_max: max,
      temperature_2m_min: min,
      time: dates,
      weathercode: codes,
    } = this.props.weather

    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className='weather'>
          {dates.map((date, index) => (
            <Day
              date={date}
              max={max[index]}
              min={min[index]}
              code={codes[index]}
              key={date}
              isToday={index === 0}
            />
          ))}
        </ul>
      </div>
    )
  }
}

Weather.propTypes = {
  weather: PropTypes.object,
  location: PropTypes.string,
}
