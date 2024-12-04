export type Post = {
  title: string
  body: string
}

export type Context = {
  posts: Post[]
  onAddPost: (post: Post) => void
  onClearPosts: () => void
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}
