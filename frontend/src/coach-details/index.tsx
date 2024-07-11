import CoachExperiences from '../coach-experiences'
import { useAppSelector } from '../hooks'
import styles from './coach-details.module.scss'

const CoachDetails = () => {
  const card = useAppSelector(state => state.coachCard.card)

  const avatar = card?.gender === 'мужской' ? './coach-men-example.jpg' : './coach-girl-example.jpg'

  return (
    card && (
      <div>
        <figure className={styles.figure}>
          <img className={styles.avatar} src={card?.portfolio[0] || avatar} alt='' />
          <figcaption>
            <CoachExperiences card={card} />
          </figcaption>
        </figure>
        <div>
          comments: {card.comments.length}
          <input
            className={styles.commentInput}
            type='text'
            name='comment'
            placeholder='Оставить отзыв...'
          />
        </div>
      </div>
    )
  )
}

export default CoachDetails
