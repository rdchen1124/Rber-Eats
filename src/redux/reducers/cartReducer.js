import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCartShowing: false,
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
  },
})

// Action creators are generated for each case reducer function
export const { showCart, hideCart, toggleCartButton } = cartSlice.actions

export default cartSlice.reducer