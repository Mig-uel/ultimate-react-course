import { useSearchParams } from 'react-router'

export const useURLPosition = (): [number, number] => {
  const [searchParams] = useSearchParams()

  const lat = searchParams.get('lat') || 0
  const lng = searchParams.get('lng') || 0

  return [Number(lat), Number(lng)]
}
