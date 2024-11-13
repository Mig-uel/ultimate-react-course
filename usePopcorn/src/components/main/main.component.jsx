import ResultsBox from './results-box.component'
import WatchedBox from './watched-box.component'

const Main = () => {
  return (
    <main className='main'>
      {/* SEARCH RESULTS BOX */}
      <ResultsBox />

      {/* WATCHED BOX */}
      <WatchedBox />
    </main>
  )
}
export default Main
