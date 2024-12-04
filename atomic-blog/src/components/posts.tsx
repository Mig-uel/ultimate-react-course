import List from './list'
import type * as types from '../types'

function Posts({ posts }: { posts: types.Post[] }) {
  return (
    <section>
      <List posts={posts} />
    </section>
  )
}

export default Posts
