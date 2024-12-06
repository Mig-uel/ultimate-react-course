// import Test from '../test'
import type * as types from '../types'

function List({ posts }: { posts: types.Post[] }) {
  return (
    <>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {/* <Test /> */}
    </>
  )
}

export default List
