import type * as types from '../types'

function Results({ posts }: { posts: types.Post[] }) {
  return <p>🚀 {posts.length} atomic posts found</p>
}

export default Results
