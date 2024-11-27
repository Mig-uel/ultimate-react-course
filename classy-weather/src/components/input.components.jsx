import { Component } from 'react'
import PropTypes from 'prop-types'

export class Input extends Component {
  render() {
    const { location, handleChange } = this.props

    return (
      <input
        type='text'
        placeholder='Search for location...'
        value={location}
        onChange={handleChange}
      />
    )
  }
}

Input.propTypes = {
  location: PropTypes.string,
  handleChange: PropTypes.func,
}
