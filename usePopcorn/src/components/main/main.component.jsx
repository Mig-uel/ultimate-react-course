import ResultsList from './results-list.component'
import WatchedList from './watched-list.component'

const Main = () => {
  return (
    <main className='main'>
      {/* SEARCH RESULTS */}
      <ResultsList />

      {/* WATCHED LIST */}
      <WatchedList />
    </main>
  )
}
export default Main
