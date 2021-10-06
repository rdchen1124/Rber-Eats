import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import cartReducer from './reducers/cartReducer'
import menuReducer from './reducers/menuReducer'
import storeReducer from './reducers/storeReducer'
import { getAuthUser, getCart, countingItems } from '../utils'

const localUser = getAuthUser();
const lastUser = JSON.stringify(localUser) !== '{}' ? localUser : {id:0, name:'', favorites:[]};
const localCart = getCart();
const lastItems = localCart ? localCart.items : [];
const lastCountedItems = localCart ? countingItems(localCart.items) : {}
const lastCartStore = localCart ? localCart.cartStore : {};
const lastTotal = lastItems.reduce((total, item)=>{
  return total + item.amount * item.price;
},0)
const preloadedState = {
  user: {
    user: lastUser,
    isUserCardShowing: false,
    isUpdatingFavorites: false,
    updatingFavoritesError: ''
  },
  cart: {
    isCartShowing: false,
    isSubmitted: false,
    isSubmitting: false,
    isNeedCutlery: false,
    submitError: '',
    items: lastItems,
    countedItems: lastCountedItems,
    totalAmount: lastTotal,
    cartStore: lastCartStore,
    tempStore: {},
    tempOrder: {}
  },
  store: {
    store: {}
  },
  menu: {
    isMenuShowing: false,
    isOrderChecking: false,
    meal: {}
  }

}
const reducer = {
  user: userReducer,
  cart: cartReducer,
  menu: menuReducer,
  store: storeReducer
}
export const store = configureStore({
  reducer,
  preloadedState
})