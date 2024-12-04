import { useEffect, useState } from 'react'
import Header from './components/header'
import Main from './components/main'
import Archive from './components/archive'
import Footer from './components/footer'
import { PostProvider } from './context/PostContext'

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false)

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle('fake-dark-mode')
    },
    [isFakeDark]
  )

  return (
    <section>
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className='btn-fake-dark-mode'
      >
        {isFakeDark ? '☀️' : '🌙'}
      </button>
      <PostProvider>
        <Header />
        <Main />
        <Archive />
      </PostProvider>

      <Footer />
    </section>
  )
}

export default App
