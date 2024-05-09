import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import cardList from '../../cardsData.json'
import { CoachCard } from '../../types'

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
    },
    setShowSortModal: (state, action: PayloadAction<boolean>) => {
      state.showSortModal = action.payload
    },
  },
})

export const { getOneCard, setSort, setShowSortModal } = coachCardSlice.actions
export default coachCardSlice.reducer
