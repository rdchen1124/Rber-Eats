import { createSlice } from '@reduxjs/toolkit'
import { addOrder as addOrderAPI } from '../../WebApi';
const initialState = {
  isCartShowing: false,
  isSubmitted: false,
  isSubmitting: false,
  submitError: '',
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
        if(!state.items.length){
          state.cartStore = {};
        }
        
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
      state.cartStore = {};
    },
    setCartStore: (state, action) => {
      state.cartStore = {...action.payload};
    },
    setTempStore: (state, action) => {
      state.tempStore = {...action.payload};
    },
    setTempOrder: (state, action) => {
      state.tempOrder = {...action.payload}
    },
    setIsSubmitted: (state, action) => {
      state.isSubmitted = action.payload;
    },
    setIsSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    setSubmitError: (state, action) => {
      state.submitError = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  showCart, hideCart, toggleCartButton,
  addToCart, plusItemInCart, minusItemInCart, createNewOrder, clearCart,
  setCartStore, setTempStore, setTempOrder,
  setIsSubmitted, setIsSubmitting, setSubmitError
} = cartSlice.actions
// const timeout = (ms) => {
//   return new Promise(resolve=>{
//     setTimeout(resolve, ms);
//   })
// }
export const addOrder = (data) => (dispatch) => {
  dispatch(setIsSubmitting(true));
  // await timeout(3000);
  // dispatch(setIsSubmitted(true));
  // await timeout(3000);
  // dispatch(setIsSubmitting(false));
  addOrderAPI(data).then(res=>{
    if(res.ok === 0){
      dispatch(setSubmitError(res.message))
      // console.log('error', res.message);
    }else{
      dispatch(setIsSubmitted(true));
    }
    dispatch(setIsSubmitting(false));
  }).catch(error=>{
    // console.log('error', error.toString());
    dispatch(setSubmitError(error.toString()));
    dispatch(setIsSubmitting(false));
  })
}

export default cartSlice.reducer