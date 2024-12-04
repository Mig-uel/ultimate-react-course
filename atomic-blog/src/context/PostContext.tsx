import { createContext, useState } from 'react'
import { createRandomPost } from '../utils/createRandomPost'
import type * as types from '../types'

const PostContext = createContext<types.Context>({
  posts: [],
  onAddPost: () => {},
  onClearPosts: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
})

const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  )
  const [searchQuery, setSearchQuery] = useState('')

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

  const value: types.Context = {
    posts: searchedPosts,
    onAddPost: handleAddPost,
    onClearPosts: handleClearPosts,
    searchQuery,
    setSearchQuery,
  }

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

export { PostContext, PostProvider }
