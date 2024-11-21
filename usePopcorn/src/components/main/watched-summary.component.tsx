import { WatchedData } from '@/types/types'

const average = (arr: number[]) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0)

const WatchedSummary = ({ watched }: { watched: WatchedData[] }) => {
  const avgImdbRating = parseFloat(
    average(watched.map((movie) => movie.imdbRating)).toFixed(2)
  )
  const avgUserRating = parseFloat(
    average(watched.map((movie) => movie.userRating)).toFixed(2)
  )
  const avgRuntime = Math.round(average(watched.map((movie) => movie.runtime)))

  return (
    <div className='summary'>
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  )
}
export default WatchedSummary
