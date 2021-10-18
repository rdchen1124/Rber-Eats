import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  store: {},
  stores: []
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
    }
  },
})

// Action creators are generated for each case reducer function
export const { setStore, setStores } = storeSlice.actions

export default storeSlice.reducer