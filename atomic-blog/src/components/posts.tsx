import { usePostContext } from '../context/PostContext'
import List from './list'

function Posts() {
  const { posts } = usePostContext()

  return (
    <section>
      <List posts={posts} />
    </section>
  )
}

export default Posts
