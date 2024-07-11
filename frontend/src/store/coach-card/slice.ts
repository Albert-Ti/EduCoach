import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CoachCard } from '../../types'
import { cardList } from '../mockData'

type CoachCardSlice = {
  cards: CoachCard[]
  card: CoachCard | null
  sort: string
  showSortModal: boolean
}

const initialState: CoachCardSlice = {
  cards: cardList,
  card: null,
  sort: 'по популярности',
  showSortModal: false,
}

const coachCardSlice = createSlice({
  name: 'coachCard',
  initialState,
  reducers: {
    getOneCard: (state, action: PayloadAction<number>) => {
      state.card = state.cards.filter(card => card.id === action.payload)[0]
    },

    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload

      state.cards = state.cards.sort((a, b) => {
        if (state.sort === 'по рейтингу') {
          return b.rating - a.rating
        }

        if (state.sort === 'по популярности') {
          return b.comments.length - a.comments.length
        }

        if (state.sort === 'по свободным') {
          const cardsOrder = {
            available: 1,
            busy: 2,
            offline: 3,
          }
          return cardsOrder[a.status] - cardsOrder[b.status]
        }
        return 0
      })
    },
    setShowSortModal: (state, action: PayloadAction<boolean>) => {
      state.showSortModal = action.payload
    },
  },
})

export const { getOneCard, setSort, setShowSortModal } = coachCardSlice.actions
export default coachCardSlice.reducer
