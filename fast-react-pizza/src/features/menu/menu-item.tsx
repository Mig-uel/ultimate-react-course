import { formatCurrency } from '../../utilities/helpers'
import type * as types from '../../types'

function MenuItem({ pizza }: { pizza: types.MenuItem }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  )
}

export default MenuItem
