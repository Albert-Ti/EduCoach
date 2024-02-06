import React from 'react'
import cl from './app-header.module.scss'

const AppHeader: React.FC = () => {
  return (
    <div className={cl.container}>
      <div className={cl.content}>
        <a className={cl.logo} href='/'>
          <img className={cl.icon} src='./weight-gym.svg' alt='иконка веса' />
          <h1 className={cl.title}>
            <span className={cl.accent}>Тренерский</span> состав
          </h1>
        </a>
      </div>
    </div>
  )
}

export default AppHeader
