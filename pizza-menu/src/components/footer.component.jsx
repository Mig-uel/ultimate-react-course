import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()} | We're currently open!
    </footer>
  )
}
export default Footer
