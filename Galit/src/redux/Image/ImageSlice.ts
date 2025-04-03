import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ImageState {
  ImageUrl: string
}

const initialState: ImageState = {
    ImageUrl: " ",
}

export const ImageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {

    setImage: (state, action: PayloadAction<string>) => {
    
      state.ImageUrl = action.payload
    },
  },
})

export const { setImage } = ImageSlice.actions

export default ImageSlice.reducer