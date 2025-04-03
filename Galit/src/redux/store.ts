import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import imageReducer from './Image/ImageSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    image: imageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch