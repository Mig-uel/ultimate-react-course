const Order = ({ isOpen }) => {
  return (
    <>
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
    </>
  )
}
export default Order
