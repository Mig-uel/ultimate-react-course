import { WatchedData } from '@/types/types'
import WatchedMovie from './watched-movie.component'

const WatchedMovieList = ({ watched }: { watched: WatchedData[] }) => {
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
