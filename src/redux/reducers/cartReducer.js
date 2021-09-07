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
    plusItemInCart: (state, action) => {
      //action.payload = {id:1, amount: 1}
      let extraCharges;
      state.items = state.items.map(item => {
        if(item.id === action.payload.id){
          extraCharges = action.payload.amount * item.price;
          return {...item, amount: item.amount + action.payload.amount}
        }
        return item;
      })
      state.totalAmount += extraCharges;
    },
    minusItemInCart: (state, action) => {
      //action.payload = {id:1, amount: 1}
      let extraCharges;
      const targetItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      const targetItem = state.items[targetItemIndex];
      if(targetItem.amount === 1){
        state.items = state.items.filter(item => item.id !== action.payload.id)
        extraCharges = action.payload.amount * targetItem.price;
      }
      else{
        state.items = state.items.map(item => {
          if(item.id === action.payload.id){
            extraCharges = action.payload.amount * item.price;
            return {...item, amount: item.amount - action.payload.amount}
          }
          return item;
        })
      }
      state.totalAmount -= extraCharges;
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
  addToCart, plusItemInCart, minusItemInCart, createNewOrder, clearCart,
  setCartStore, setTempStore, setTempOrder
} = cartSlice.actions

export default cartSlice.reducer