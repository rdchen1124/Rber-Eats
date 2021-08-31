import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import cartReducer from './reducers/cartReducer'
import menuReducer from './reducers/menuReducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    menu: menuReducer
  },
})