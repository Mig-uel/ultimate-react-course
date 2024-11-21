import { WatchedData } from '@/types/types'
import WatchedMovie from './watched-movie.component'

const WatchedMovieList = ({
  watched,
  handleDeleteWatchedMovie,
}: {
  watched: WatchedData[]
  handleDeleteWatchedMovie: (id: string) => void
}) => {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        // WATCHED MOVIE
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          handleDeleteWatchedMovie={handleDeleteWatchedMovie}
        />
      ))}
    </ul>
  )
}
export default WatchedMovieList
