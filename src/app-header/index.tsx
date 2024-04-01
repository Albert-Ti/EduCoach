import React from 'react'
import styles from './app-header.module.scss'

const AppHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <a className={styles.logo} href='/'>
          <img className={styles.icon} src='./weight-gym.svg' alt='иконка веса' />
          <h1 className={styles.title}>
            <span className={styles.accent}>Coaching</span> staff
          </h1>
        </a>

        <img style={{ width: 50 }} src='./cup-trophy.svg' alt='' />
      </div>
    </div>
  )
}

export default AppHeader
