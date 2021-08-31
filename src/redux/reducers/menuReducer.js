import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  meal: {}
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMeal: (state, action) => {
      state.meal = {...action.payload};
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMeal } = menuSlice.actions

export default menuSlice.reducer