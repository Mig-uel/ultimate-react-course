import { Component } from 'react'
import PropTypes from 'prop-types'

export class Input extends Component {
  render() {
    const { location, handleChange } = this.props

    return (
      <div>
        <input
          type='text'
          placeholder='Search for location...'
          value={location}
          onChange={handleChange}
        />
        <div className='clear'>&times;</div>
      </div>
    )
  }
}

Input.propTypes = {
  location: PropTypes.string,
  handleChange: PropTypes.func,
}
