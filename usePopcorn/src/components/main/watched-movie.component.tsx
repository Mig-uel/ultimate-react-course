import type { WatchedData } from '@/types/types'

const WatchedMovie = ({
  movie,
  handleDeleteWatchedMovie,
}: {
  movie: WatchedData
  handleDeleteWatchedMovie: (id: string) => void
}) => {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>

        <button
          className='btn-delete'
          onClick={() => handleDeleteWatchedMovie(movie.imdbID)}
        >
          &times;
        </button>
      </div>
    </li>
  )
}
export default WatchedMovie
