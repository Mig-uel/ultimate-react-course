const API_URL = 'https://react-fast-pizza-api.jonas.io/api'

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`)

  // Fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error('Failed getting menu.')

  const { data } = await res.json()

  return data
}

export async function getOrderById(id: string) {
  const res = await fetch(`${API_URL}/order/${id}`)

  if (!res.ok) throw Error(`Order #${id} not found.`)

  const { data } = await res.json()

  return data
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) throw Error('Could not create order.')

    const { data } = await res.json()

    return data
  } catch (error) {
    console.log(error)
  }
}

export async function updateOrderById(id: string, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) throw Error('Failed to update order.')

    // We don't need the data, so we don't return anything
    return
  } catch (error) {
    console.log(error)
  }
}
