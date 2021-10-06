import { createSlice } from '@reduxjs/toolkit'
import { updateFavorites as updateFavoritesAPI } from '../../WebApi';
const initArray = [];
const initialState = {
  user: {
    id: 0,
    name: '',
    favorites: initArray
  },
  isUserCardShowing: false,
  isUpdatingFavorites: false,
  updatingFavoritesError: ''
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
      state.user = {...action.payload};
    },
    cleanUser: (state) => {
      state.user = {...initialState.user}
    },
    toggleFavorites: (state, action) => {
      let updatedFavorites = []

      if(state.user.favorites !== undefined){// favorites not empty
        if(state.user.favorites.includes(action.payload)){// remove from favorites
          updatedFavorites = state.user.favorites.filter(favorite => favorite !== action.payload);
        }else{// add to favorites
          updatedFavorites = [...state.user.favorites, action.payload]
        }
      }else{// favorites is empty, add to favorites
        updatedFavorites = [action.payload];
      }
      state.user = {...state.user, favorites: updatedFavorites};
    },
    setFavorites: (state, action) => {
      state.user = {...state.user, favorites: [...action.payload]};
    },
    clearFavorites: (state) => {
      state.user = {...state.user, favorites: []};
    },
    setIsUpdatingFavorites: (state, action) => {
      state.isUpdatingFavorites = action.payload;
    },
    setUpdatingFavoritesError: (state, action) => {
      state.updatingFavoritesError = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  showUserCard, hideUserCard, setUser, cleanUser,
  toggleFavorites, setFavorites, clearFavorites, setIsUpdatingFavorites, setUpdatingFavoritesError
} = userSlice.actions

export const updateFavorites = ({favorites, userId}) => (dispatch) => {
  dispatch(setIsUpdatingFavorites(true));
  updateFavoritesAPI({
    favorites,
    userId
  }).then(res => {
    if(JSON.stringify(res) === '{}'){
      dispatch(setUpdatingFavoritesError('查無此筆資料'))
    }
    dispatch(setIsUpdatingFavorites(false));
  }).catch(error => {
    dispatch(setUpdatingFavoritesError(error.toString()));
    dispatch(setIsUpdatingFavorites(false));
  })
}  
export default userSlice.reducer