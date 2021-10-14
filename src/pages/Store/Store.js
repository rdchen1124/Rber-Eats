import React, {  useEffect, Fragment } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {MTRoot} from '../../components/Root';
import StoreOverview from './StoreOverview';
import DUMMY_STORES from '../../DUMMY_STORES';
import Meals from '../../components/Meals';
import MealCard from '../../components/MealCard';
import { setStore } from '../../redux/reducers/storeReducer';
import { updateFavorites } from '../../redux/reducers/userReducer';
import { setAuthUser } from '../../utils';

const Store = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const store = useSelector(store => store.store.store);
  const isMenuShowing = useSelector(store => store.menu.isMenuShowing);
  const user = useSelector(store => store.user.user);
  useEffect(()=>{
    dispatch(setStore(DUMMY_STORES.filter(shop => id === shop.id)[0]))
  }, [dispatch, id])
  
  useEffect(()=>{
    setAuthUser(user);
    if(user.id !== 0){
      dispatch(updateFavorites({userId: user.id, favorites: user.favorites}))
    }
  }, [user])

  return (
    <Fragment>
      { store && <StoreOverview id={id} name={store.name} score={store.score} />}
      <MTRoot>
        <main>
          {isMenuShowing && <MealCard />}
          <Meals id={id}/>
        </main>
      </MTRoot>
    </Fragment>
  )
}
export default Store;