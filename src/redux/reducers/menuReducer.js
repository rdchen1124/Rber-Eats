import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isMenuShowing: false,
  isOrderChecking: false,
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
    showCheckModal: (state) => {
      state.isOrderChecking = true;
    },
    hideCheckModal: (state) => {
      state.isOrderChecking = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMeal, showMenu, hideMenu, showCheckModal, hideCheckModal } = menuSlice.actions

export default menuSlice.reducer