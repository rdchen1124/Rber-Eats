import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: '',
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
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { showUserCard, hideUserCard, setUser } = userSlice.actions

export default userSlice.reducer