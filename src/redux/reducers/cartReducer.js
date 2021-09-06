import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCartShowing: false,
  items: [],
  totalAmount: 0,
  cartStore: {},
  tempStore: {},
  tempOrder: {}
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
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
      state.totalAmount = state.totalAmount + action.payload.amount * action.payload.price;
    },
    createNewOrder: (state, action) => {
      state.items = [{...action.payload}];
      state.totalAmount = action.payload.amount * action.payload.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
    setCartStore: (state, action) => {
      state.cartStore = {...action.payload};
    },
    setTempStore: (state, action) => {
      state.tempStore = {...action.payload};
    },
    setTempOrder : (state, action) => {
      state.tempOrder = {...action.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  showCart, hideCart, toggleCartButton,
  addToCart, createNewOrder, clearCart,
  setCartStore, setTempStore, setTempOrder
} = cartSlice.actions

export default cartSlice.reducer