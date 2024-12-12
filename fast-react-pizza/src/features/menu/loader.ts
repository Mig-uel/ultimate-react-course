import { getMenu } from '../../services/api_restaurant'

export default async function menuLoader() {
  return await getMenu()
}
