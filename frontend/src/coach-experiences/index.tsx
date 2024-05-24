import React from 'react'
import { CoachCard } from '../types'
import styles from './coach-experiences.module.scss'

const CoachExperiences: React.FC<{ card: CoachCard }> = ({ card }) => {
  return (
    <>
      <h3 className={styles.title}>
        {card?.firstName} {card?.lastName}
      </h3>
      <ul className={styles.info}>
        <li>age: {card.age}</li>
        <li>rating {card.rating}</li>
        <li>{card.contactInfo.email}</li>
        <li>{card.contactInfo.phone}</li>
        <li>{card.contactInfo.location}</li>
      </ul>
      <ul className={styles.experiences}>
        <li>experience: {card.experienceYears} years</li>
        <li>{card.certifications.join(', ')}</li>
        <li>{card.specialties.join(', ')}</li>
      </ul>
    </>
  )
}

export default CoachExperiences
