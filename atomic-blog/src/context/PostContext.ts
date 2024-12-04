import { createContext } from 'react'
import type * as types from '../types'

// 1) CREATE A CONTEXT
const PostContext = createContext<types.Context>({
  posts: [],
  onAddPost: () => {},
  onClearPosts: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
})

export default PostContext
