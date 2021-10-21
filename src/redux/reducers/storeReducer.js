import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  store: {},
  stores: [],
  meals: []
}

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setStore: (state, action) => {
      state.store = {...action.payload};
    },
    setStores: (state, action) => {
      state.stores = [...action.payload];
    },
    setMeals: (state, action) => {
      state.meals = [ ...action.payload];
    }
  },
})

// Action creators are generated for each case reducer function
export const { setStore, setStores, setMeals } = storeSlice.actions

export default storeSlice.reducer