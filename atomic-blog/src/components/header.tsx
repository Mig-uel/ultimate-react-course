import Results from './results'
import SearchPosts from './search-post'
import type * as types from '../types'

function Header({
  posts,
  onClearPosts,
  searchQuery,
  setSearchQuery,
}: {
  posts: types.Post[]
  onClearPosts: () => void
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  )
}

export default Header
