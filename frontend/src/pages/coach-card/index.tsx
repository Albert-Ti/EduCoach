import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import React from 'react'
import { getOneCard } from '../../store/coach-card/slice'

const CoachCard = () => {
  const { id } = useParams()
  const { card } = useAppSelector(state => state.coachCard)
  const dispatch = useAppDispatch()

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
