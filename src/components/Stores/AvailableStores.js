import React from 'react';
import { Card, UnorderedList} from '../UI';
import StoreItem from './StoreItem';
import DUMMY_STORES from '../../DUMMY_STORES';
const AvailableStores = () => {
  const StoreList = DUMMY_STORES;
  return (
    <section>
      <Card>
        <UnorderedList>
          {StoreList.map(store => (
            <StoreItem
              key={store.id}
              id={store.id}
              img={store.image}
              name={store.name}
              score={store.score}
          />))}
        </UnorderedList>
      </Card>
    </section>
  )
}
export default AvailableStores;