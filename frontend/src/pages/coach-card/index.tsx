import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import React from 'react'
import { getOneCard } from '../../store/coach-card/slice'

const CoachCard = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const { card } = useAppSelector(state => state.coachCard)

  React.useEffect(() => {
    dispatch(getOneCard(+id!))
  }, [])

  if (!card) {
    return null
  }

  return (
    <div>
      <h3>{card.firstName}</h3>
    </div>
  )
}

export default CoachCard
