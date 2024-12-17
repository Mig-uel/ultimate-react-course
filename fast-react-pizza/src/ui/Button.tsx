import { memo } from 'react'
import { Link } from 'react-router-dom'

const Button = ({
  children,
  disabled = false,
  to = '',
  onClick = () => {},
  type = 'primary',
  buttonType = 'button',
}: {
  children: React.ReactNode
  disabled?: boolean
  to?: string
  onClick?: () => void
  type?: 'primary' | 'small' | 'secondary' | 'secondary_small' | 'rounded'
  buttonType?: HTMLButtonElement['type']
}) => {
  const base =
    'inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-400 text-sm'

  const styles = {
    primary: base + ' md:px-6 md:py-4 px-4 py-3',
    small: base + ' text-xs px-4 py-2 md:px-5 md:py-2.5',
    secondary:
      'inline-block border-2 border-stone-300 rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-400 px-4 py-2 md:px-5 md:py-2.5 hover:text-stone-800 focus:text-stone-800 text-sm',
    secondary_small:
      'inline-block border-2 border-stone-300 rounded-full font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-400 hover:text-stone-800 focus:text-stone-800 text-xs px-4 py-2 md:px-5 md:py-2.5 ',
    rounded: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
  }

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    )

  return (
    <button
      disabled={disabled}
      className={styles[type]}
      onClick={onClick}
      type={buttonType}
    >
      {children}
    </button>
  )
}
export default memo(Button)
