import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCartShowing: false
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { showCart, hideCart } = cartSlice.actions

export default cartSlice.reducer