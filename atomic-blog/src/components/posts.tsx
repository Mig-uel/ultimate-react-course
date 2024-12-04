import { useContext } from 'react'
import List from './list'
import { PostContext } from '../context/PostContext'

function Posts() {
  const { posts } = useContext(PostContext)

  return (
    <section>
      <List posts={posts} />
    </section>
  )
}

export default Posts
