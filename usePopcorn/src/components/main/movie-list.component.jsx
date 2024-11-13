import { useState } from 'react'
import { tempMovieData } from '../../db'
import Movie from './movie.component'

const MovieList = () => {
  const [movies, setMovies] = useState(tempMovieData)

  return (
    <ul className='list'>
      {movies?.map((movie) => (
        // MOVIE
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  )
}
export default MovieList
