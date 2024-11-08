const Pizza = ({ name, ingredients, photo, price, soldOut }) => {
  return (
    <li
      className='pizza'
      style={{ textDecoration: `${soldOut ? 'line-through' : ''}` }}
    >
      <img src={photo} alt={name} />

      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  )
}
export default Pizza
