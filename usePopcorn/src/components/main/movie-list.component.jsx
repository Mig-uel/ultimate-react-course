import Movie from './movie.component'

const MovieList = ({ movies }) => {
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
