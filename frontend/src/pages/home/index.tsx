import React from 'react'
import CoachDetails from '../../coach-details'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getOneCard } from '../../store/coach-card/slice'
import { classes } from '../../utils/classes'
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
              <p>рейтинг: {el.rating}</p>
              <p>комментарии: {el.comments.length}</p>
              <p className={classes(styles.status, styles[`status_${el.status}`])}>
                {el.status === 'available'
                  ? 'Свободен'
                  : el.status === 'busy'
                  ? 'Занят'
                  : 'Не в сети'}
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.details}>
          <CoachDetails />
        </div>
      </div>
    </main>
  )
}

export default Home
