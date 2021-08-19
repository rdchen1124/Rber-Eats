import React from 'react';
import { Card, UnorderedList} from '../UI';
import StoreItem from './StoreItem';
const AvailableStores = () => {
  return (
    <section>
      <Card>
        <UnorderedList>
          <StoreItem img='image_001' name='Store_001' score='5.0' />
          <StoreItem img='image_002' name='Store_002' score='3.9' />
          <StoreItem img='image_003' name='Store_003' score='4.7' />
          <StoreItem img='image_004' name='Store_004' score='4.5' />
          <StoreItem img='image_005' name='Store_005' score='3.5' />
          <StoreItem img='image_006' name='Store_006' score='4.3' />
        </UnorderedList>
      </Card>
    </section>
  )
}
export default AvailableStores;