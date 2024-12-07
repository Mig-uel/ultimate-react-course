import { createContext, useContext, useMemo, useState } from 'react'
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
  const searchedPosts = useMemo(
    () =>
      searchQuery.length > 0
        ? posts.filter((post) =>
            `${post.title} ${post.body}`
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          )
        : posts,
    [posts, searchQuery]
  )

  function handleAddPost(post: types.Post) {
    setPosts((posts) => [post, ...posts])
  }

  function handleClearPosts() {
    setPosts([])
  }

  const value: types.Context = useMemo(
    () => ({
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      searchQuery,
      setSearchQuery,
    }),
    [searchQuery, searchedPosts]
  )

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

const usePostContext = () => {
  const context = useContext(PostContext)

  if (!context || context === undefined)
    throw new Error('PostContext was used outside of the post provider!')

  return context
}

export { PostProvider, usePostContext }
