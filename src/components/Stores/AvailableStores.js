import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoresCard } from '../UI';
import StoreItem from './StoreItem';
import { setAuthUser } from '../../utils';
import { updateFavorites } from '../../redux/reducers/userReducer';
import STORE_IMAGES from '../../STORE_IMAGES.js';
const AvailableStores = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user.user);
  const stores = useSelector(store => store.store.stores);
  useEffect(()=>{
    setAuthUser(user);
    if(user.id !== 0){
      dispatch(updateFavorites({userId: user.id, favorites: user.favorites}))
    }
  }, [user]);

  return (
    <section>
      <StoresCard>
        {stores.map(store => (
          <StoreItem
            key={store.id}
            id={store.id}
            img={store.image}
            name={store.name}
            score={store.score}
            location={STORE_IMAGES[store.image]}
          />
        ))}
      </StoresCard>
    </section>
  )
}
export default AvailableStores;