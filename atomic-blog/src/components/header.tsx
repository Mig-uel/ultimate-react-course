import { usePostContext } from '../context/PostContext'
import Results from './results'
import SearchPosts from './search-post'

function Header() {
  // 3) CONSUMING THE CONTEXT
  const { onClearPosts } = usePostContext()!

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />

        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  )
}

export default Header
