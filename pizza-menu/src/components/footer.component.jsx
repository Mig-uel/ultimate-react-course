import React from 'react'
import Order from './order.component'

const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22

  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <footer className='footer'>
      <Order isOpen={isOpen} />
    </footer>
  )
}
export default Footer
