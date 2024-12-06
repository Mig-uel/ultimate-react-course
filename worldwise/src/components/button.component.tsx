import styles from '../styles/button.module.css'

const Button = ({
  children,
  onClick,
  type = 'primary',
  buttonType = 'button',
}: {
  children: React.ReactNode
  onClick?: () => void
  type?: string
  buttonType?: 'button' | 'submit' | 'reset'
}) => {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`${styles.btn} ${styles[type]}`}
    >
      {children}
    </button>
  )
}
export default Button
