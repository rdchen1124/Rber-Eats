import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import Root from '../../components/Root';
// import Stores from '../../components/Stores';
import StoreOverview from './StoreOverview';
import DUMMY_STORES from '../../DUMMY_STORES';
import Meals from '../../components/Meals';
import MealCard from '../../components/MealCard';
const Store = () => {
  const isMenuShowing = useSelector(store => store.menu.isMenuShowing);
  let { id } = useParams();
  const [store, setStore] = useState({});
  useEffect(()=>{
    setStore(DUMMY_STORES.filter(shop => id === shop.id)[0])
  }, [id])
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