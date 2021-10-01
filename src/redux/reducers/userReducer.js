import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: '',
  isUserCardShowing: false,
  favorites: []
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
    },
    toggleFavorites: (state, action) => {
      if(state.favorites.includes(action.payload)){// remove from favorites
        state.favorites = state.favorites.filter(favorite => favorite !== action.payload);
      }else{// add to favorites
        state.favorites = [...state.favorites, action.payload];
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { showUserCard, hideUserCard, setUser, toggleFavorites } = userSlice.actions

export default userSlice.reducer