import {
  ActiveQuestion,
  ErrorMessage,
  FinalScreen,
  Footer,
  Header,
  Loader,
  Main,
  NextButton,
  ProgressBar,
  StartScreen,
  Timer,
} from './components'
import { useQuizContext } from './context/QuizContext'

function App() {
  const { error, status } = useQuizContext()

  return (
    <div className='app'>
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && error && <ErrorMessage />}
        {status === 'ready' && <StartScreen />}

        {status === 'active' && (
          <>
            <ProgressBar />
            <ActiveQuestion />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}

        {status === 'finished' && <FinalScreen />}
      </Main>
    </div>
  )
}

export default App
