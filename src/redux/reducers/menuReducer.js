import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMenuShowing: false,
  meal: {}
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMeal: (state, action) => {
      state.meal = {...action.payload};
    },
    showMenu: (state) => {
      state.isMenuShowing = true;
    },
    hideMenu: (state) => {
      state.isMenuShowing = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMeal, showMenu, hideMenu } = menuSlice.actions

export default menuSlice.reducer