import { Map, Sidebar } from '../components'
import styles from '../styles/app-layout.module.css'

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  )
}
export default AppLayout
