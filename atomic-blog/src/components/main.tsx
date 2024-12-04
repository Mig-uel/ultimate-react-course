import Posts from './posts'
import FormAddPost from './add-post-form'
import type * as types from '../types'

function Main({
  posts,
  onAddPost,
}: {
  posts: types.Post[]
  onAddPost: (post: types.Post) => void
}) {
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  )
}

export default Main
