import { getMenu } from '../../services/api_restaurant'
import { MenuItem } from '../../types'

export default async function menuLoader(): Promise<MenuItem[]> {
  return await getMenu()
}
