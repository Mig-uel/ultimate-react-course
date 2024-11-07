const Pizza = ({ name, ingredients, photo, price }) => {
  return (
    <div>
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
    </div>
  )
}
export default Pizza
