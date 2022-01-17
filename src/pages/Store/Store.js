import React, {  useEffect, Fragment } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {StoreRoot} from '../../components/Root';
import StoreOverview from './StoreOverview';
import Meals from '../../components/Meals';
import MealCard from '../../components/MealCard';
import { setStore, setMeals } from '../../redux/reducers/storeReducer';
import { updateFavorites } from '../../redux/reducers/userReducer';
import { setAuthUser } from '../../utils';
import { getStore, getMeals } from '../../WebApi';
import STORE_IMAGES from '../../STORE_IMAGES';
const Store = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const store = useSelector(store => store.store.store);
  const stores = useSelector(store => store.store.stores);
  const isMenuShowing = useSelector(store => store.menu.isMenuShowing);
  const user = useSelector(store => store.user.user);
  useEffect(()=>{
    if(Array.isArray(stores) && !stores.length){
      getStore(id).then(data => {
        dispatch(setStore(data));
      })
    }else{
      dispatch(setStore(stores.filter(store => +id === store.id)[0]));
    }
    getMeals(id).then(data => dispatch(setMeals(data)));
  }, [dispatch, id])
  useEffect(()=>{
    setAuthUser(user);
    if(user.id !== 0){
      dispatch(updateFavorites({userId: user.id, favorites: user.favorites}))
    }
  }, [user])
  return (
    <Fragment>
      { store && <StoreOverview id={id} name={store.name} score={store.score} location={STORE_IMAGES[store.image]}/>}
      <StoreRoot>
        <main>
          {isMenuShowing && <MealCard />}
          <Meals id={id}/>
        </main>
      </StoreRoot>
    </Fragment>
  )
}
export default Store;