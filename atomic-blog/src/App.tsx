import { useEffect, useState } from 'react'
import Header from './components/header'
import Main from './components/main'
import Archive from './components/archive'
import Footer from './components/footer'
import { createRandomPost } from './utils/createRandomPost'
import type * as types from './types'

function App() {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [isFakeDark, setIsFakeDark] = useState(false)

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts

  function handleAddPost(post: types.Post) {
    setPosts((posts) => [post, ...posts])
  }

  function handleClearPosts() {
    setPosts([])
  }

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

      <Header
        posts={searchedPosts}
        onClearPosts={handleClearPosts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Main posts={searchedPosts} onAddPost={handleAddPost} />
      <Archive onAddPost={handleAddPost} />
      <Footer />
    </section>
  )
}

export default App
