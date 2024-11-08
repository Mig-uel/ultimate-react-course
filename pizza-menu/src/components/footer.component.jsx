import React from 'react'

const Footer = () => {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22

  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <footer className='footer'>
      {isOpen ? (
        <div className='order'>
          <p>SHOP IS OPEN</p>
          <button className='btn'>ORDER ONLINE</button>
        </div>
      ) : (
        <p>SHOP IS CLOSED</p>
      )}
    </footer>
  )
}
export default Footer
