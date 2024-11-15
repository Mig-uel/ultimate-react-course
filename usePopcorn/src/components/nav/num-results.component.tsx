import { MovieData } from '@/types/types'

const NumResults = ({ movies }: { movies: MovieData[] }) => {
  return (
    <p className='num-results'>
      Found <strong>{movies.length}</strong> results
    </p>
  )
}
export default NumResults
