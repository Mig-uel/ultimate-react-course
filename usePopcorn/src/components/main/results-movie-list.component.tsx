import Movie from './movie.component'

const ResultsMovieList = ({ movies }) => {
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
