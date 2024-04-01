import React from 'react'
import styles from './home.module.scss'
import coachList from '../../cardsData.json'

const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <ul className={styles.coachCardList}>
          {coachList.map((el, i) => (
            <li className={styles.coachCard} key={i}>
              <a href='#'>
                <p>
                  {el.firstName} {el.lastName}, возраст: {el.age}
                </p>
                <p>{el.specialties.join(', ')}</p>
                <p>опыт: {el.experienceYears}лет</p>
                <p>рейтинг: {el.rating}</p>
                <p>комментариев: {el.comments.length}</p>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.coachCardDetails}>Details</div>
      </div>
    </main>
  )
}

export default Home
