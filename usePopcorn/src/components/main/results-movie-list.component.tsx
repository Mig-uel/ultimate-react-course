import Movie from './movie.component'
import { MovieData } from '@/types/types'

const ResultsMovieList = ({ movies }: { movies: MovieData[] }) => {
  return (
    <ul className='list'>
      {movies?.map((movie) => (
        // MOVIE
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  )
}
export default ResultsMovieList
