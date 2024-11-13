import ResultsBox from './results-box.component'
import WatchedBox from './watched-box.component'

const Main = ({ movies }) => {
  return (
    <main className='main'>
      {/* SEARCH RESULTS BOX */}
      <ResultsBox movies={movies} />

      {/* WATCHED BOX */}
      <WatchedBox />
    </main>
  )
}
export default Main
