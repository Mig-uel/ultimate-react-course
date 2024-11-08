const Pizza = ({ name, ingredients, photo, price, soldOut }) => {
  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={photo} alt={name} />

      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>

        {soldOut ? <span>SOLD OUT</span> : <span>{price}</span>}
      </div>
    </li>
  )
}
export default Pizza
