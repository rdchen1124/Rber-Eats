import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import Root from '../../components/Root';
import Stores from '../../components/Stores';

const Store = () => {
  let { id } = useParams();
  return (
    <Root>
      <div>
        Store_Image_{id}
      </div>
      <main>
        <Stores />
      </main>
    </Root>
  )
}
export default Store;