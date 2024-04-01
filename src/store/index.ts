import { configureStore } from '@reduxjs/toolkit'
import coachCardReducer from './coach-card/slice'

export const store = configureStore({
  reducer: {
    coachCard: coachCardReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
