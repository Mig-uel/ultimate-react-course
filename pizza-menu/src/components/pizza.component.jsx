const Pizza = ({ name, ingredients, photo, price }) => {
  return (
    <li className='pizza'>
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
