import React from 'react'
import styles from './app-header.module.scss'
import { Link } from 'react-router-dom'

const AppHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link className={styles.logo} to='/'>
          <img className={styles.icon} src='./weight-gym.svg' alt='иконка веса' />
          <h1 className={styles.title}>
            <span className={styles.accent}>Coaching</span> staff
          </h1>
        </Link>

        <img style={{ width: 50 }} src='./cup-trophy.svg' alt='' />
      </div>
    </div>
  )
}

export default AppHeader
