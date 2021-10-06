import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StoresCard } from '../UI';
import StoreItem from './StoreItem';
import DUMMY_STORES from '../../DUMMY_STORES';
import { setAuthUser } from '../../utils';
const AvailableStores = () => {
  const StoreList = DUMMY_STORES;
  const user = useSelector(store => store.user.user);
  useEffect(()=>{
    setAuthUser(user)
  }, [user])
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
          />
        ))}
      </StoresCard>
    </section>
  )
}
export default AvailableStores;