import { Component } from 'react'

import { formatDay, getWeatherIcon } from '../utils'
import PropTypes from 'prop-types'

export class Day extends Component {
  render() {
    const { date, max, min, code, isToday } = this.props

    return (
      <li className='day'>
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? 'Today' : formatDay(date)}</p>
        <p>
          {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
        </p>
      </li>
    )
  }
}

Day.propTypes = {
  date: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  code: PropTypes.number,
  isToday: PropTypes.bool,
}
