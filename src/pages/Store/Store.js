import React, {  useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Root from '../../components/Root';
import StoreOverview from './StoreOverview';
import DUMMY_STORES from '../../DUMMY_STORES';
import Meals from '../../components/Meals';
import MealCard from '../../components/MealCard';
import { setStore } from '../../redux/reducers/storeReducer';
import { setFavorites } from '../../utils';

const Store = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const store = useSelector(store => store.store.store);
  const isMenuShowing = useSelector(store => store.menu.isMenuShowing);
  const favorites = useSelector(store => store.user.favorites);
  useEffect(()=>{
    dispatch(setStore(DUMMY_STORES.filter(shop => id === shop.id)[0]))
  }, [dispatch, id])
  
  useEffect(()=>{
    setFavorites(favorites);
    console.log('favorites', favorites);
  }, [favorites])

  return (
    <Root>
      { store && 
        <StoreOverview id={id} name={store.name} score={store.score} />}
      <main>
        {isMenuShowing && <MealCard />}
        <Meals id={id}/>
      </main>
    </Root>
  )
}
export default Store;