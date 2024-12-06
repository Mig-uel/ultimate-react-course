import { Link } from 'react-router'
import { Button } from '../components'
import styles from '../styles/page-not-found.module.css'

const PageNotFound = () => {
  return (
    <div className={styles.pnf}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Oops, page not found!</h1>

        <Link to='/'>
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  )
}
export default PageNotFound
