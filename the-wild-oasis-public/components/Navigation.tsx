import Link from 'next/link'
import { auth } from '@/lib/auth'

const Navigation = async () => {
  const session = await auth()

  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/cabins'
            className='hover:text-accent-400 transition-colors'
          >
            Cabins
          </Link>
        </li>

        <li>
          <Link
            href='/about'
            className='hover:text-accent-400 transition-colors'
          >
            About
          </Link>
        </li>

        {session && session.user ? (
          <li>
            <Link
              href='/account'
              className='hover:text-accent-400 transition-colors flex items-center gap-4'
            >
              <img
                src={session.user.image as string}
                className='h-8 rounded-full'
                alt={session.user.name as string}
                referrerPolicy='no-referrer'
              />
              <span className='capitalize'>{session.user.name}</span>
            </Link>
          </li>
        ) : (
          <li>
            <Link
              href='/account'
              className='hover:text-accent-400 transition-colors'
            >
              <span>Account</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation
