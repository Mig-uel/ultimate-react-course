import Movie from './movie.component'
import { MovieData } from '@/types/types'

const ResultsMovieList = ({
  movies,
  handleSelectMovie,
}: {
  movies: MovieData[]
  handleSelectMovie: (id: string) => void
}) => {
  return (
    <ul className='list list-movies'>
      {movies?.map((movie) => (
        // MOVIE
        <Movie
          key={movie.imdbID}
          movie={movie}
          handleSelectMovie={handleSelectMovie}
        />
      ))}
    </ul>
  )
}
export default ResultsMovieList
