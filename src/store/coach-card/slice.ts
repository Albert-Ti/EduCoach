import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CoachCardSlice = {
  sort: string
  showSortModal: boolean
}

const initialState: CoachCardSlice = {
  sort: 'по популярности',
  showSortModal: false,
}

const coachCardSlice = createSlice({
  name: 'coachCard',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload
    },
    setShowSortModal: (state, action: PayloadAction<boolean>) => {
      state.showSortModal = action.payload
    },
  },
})

export const { setSort, setShowSortModal } = coachCardSlice.actions
export default coachCardSlice.reducer
