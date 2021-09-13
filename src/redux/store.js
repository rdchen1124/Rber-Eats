import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import cartReducer from './reducers/cartReducer'
import menuReducer from './reducers/menuReducer'
import storeReducer from './reducers/storeReducer'
import { getAuthUser } from '../utils'

const loaclUser = getAuthUser();
const lastUser = loaclUser ? loaclUser : '';
const preloadedState = {
  user: {
    user: lastUser,
    isUserCardShowing: false
  },
  cart: {
    isCartShowing: false,
    items: [],
    totalAmount: 0,
    cartStore: {},
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