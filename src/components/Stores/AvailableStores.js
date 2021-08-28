import React from 'react';
import { StoresCard } from '../UI';
import StoreItem from './StoreItem';
import DUMMY_STORES from '../../DUMMY_STORES';
const AvailableStores = () => {
  const StoreList = DUMMY_STORES;
  return (
    <section>
      <StoresCard>
          {StoreList.map(store => (
            <StoreItem
              key={store.id}
              id={store.id}
              img={store.image}
              name={store.name}
              score={store.score}
            />))
          }
      </StoresCard>
    </section>
  )
}
export default AvailableStores;