import styles from '../styles/button.module.css'

const Button = ({
  children,
  onClick,
  type = 'primary',
}: {
  children: React.ReactNode
  onClick?: () => void
  type: string
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  )
}
export default Button
