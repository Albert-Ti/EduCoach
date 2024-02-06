import React from 'react'
import cl from './home.module.scss'

const Home: React.FC = () => {
  return (
    <main className={cl.container}>
      <div className={cl.content}>
        <ul>
          {[...Array(10)].map((_, i) => (
            <li key={i}>Coach</li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Home
