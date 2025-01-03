import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Wild Oasis - Home',
}

const Home = () => {
  return (
    <div>
      <h1>The Wild Oasis</h1>

      <Link href='/cabins'>Explore luxury cabins</Link>
    </div>
  )
}

export default Home
