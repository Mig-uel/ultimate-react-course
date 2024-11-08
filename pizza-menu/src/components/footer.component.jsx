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
          <button className='btn'>ORDER ONLINE</button>
        </div>
      ) : (
        <div className='order'>
          <button
            className='btn'
            disabled={isOpen}
            style={{ cursor: 'not-allowed', backgroundColor: 'lightgray' }}
          >
            ORDER ONLINE
          </button>
        </div>
      )}
    </footer>
  )
}
export default Footer
