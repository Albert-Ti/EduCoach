import { useAppSelector } from '../hooks'
import styles from './coach-details.module.scss'

const CoachDetails = () => {
  const card = useAppSelector(state => state.coachCard.card)

  return (
    <div className={styles.coachCardDetails}>
      <h3>
        {card?.firstName} {card?.lastName}
      </h3>
    </div>
  )
}

export default CoachDetails
