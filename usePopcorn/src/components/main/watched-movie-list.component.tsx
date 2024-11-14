import WatchedMovie from './watched-movie.component'

const WatchedMovieList = ({ watched }) => {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        // WATCHED MOVIE
        <WatchedMovie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  )
}
export default WatchedMovieList
