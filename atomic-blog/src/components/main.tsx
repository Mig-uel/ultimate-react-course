import { memo } from 'react'
import Posts from './posts'
import FormAddPost from './add-post-form'

const Main = memo(function () {
  return (
    <main>
      <FormAddPost />
      <Posts />
    </main>
  )
})

export default Main
