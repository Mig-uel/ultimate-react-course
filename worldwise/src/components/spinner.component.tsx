import styles from '../styles/spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  )
}
export default Spinner
