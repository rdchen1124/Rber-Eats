import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isUserCardShowing: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    showUserCard: (state) => {
      state.isUserCardShowing = true;
    },
    hideUserCard: (state) => {
      state.isUserCardShowing = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { showUserCard, hideUserCard } = userSlice.actions

export default userSlice.reducer