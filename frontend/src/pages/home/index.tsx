import React from 'react'
import CoachDetails from '../../coach-details'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getOneCard } from '../../store/coach-card/slice'
import styles from './home.module.scss'

const Home: React.FC = () => {
  const cards = useAppSelector(state => state.coachCard.cards)
  const dispatch = useAppDispatch()

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <ul className={styles.coachCardList}>
          {cards.map((el, i) => (
            <li
              className={styles.coachCard}
              onClick={() => dispatch(getOneCard(el.id))}
              key={`${i}${el.id}`}
            >
              <p>
                {el.firstName} {el.lastName}, возраст: {el.age}
              </p>
              <p>{el.specialties.join(', ')}</p>
              <p>опыт: {el.experienceYears}лет</p>
              <p>рейтинг: {el.rating}</p>
              <p>комментариев: {el.comments.length}</p>
            </li>
          ))}
        </ul>
        <CoachDetails />
      </div>
    </main>
  )
}

export default Home
