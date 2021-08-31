import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCartShowing: false,
  isMenuShowing: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showCart: (state) => {
      state.isCartShowing = true;
    },
    hideCart: (state) => {
      state.isCartShowing = false;
    },
    toggleCartButton: (state) => {
      state.isCartShowing = !state.isCartShowing;
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
export const { showCart, hideCart, toggleCartButton, showMenu, hideMenu } = cartSlice.actions

export default cartSlice.reducer