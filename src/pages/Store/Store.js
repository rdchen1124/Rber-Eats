import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import Root from '../../components/Root';
import Stores from '../../components/Stores';
import StoreOverview from './StoreOverview';

const Store = () => {
  let { id } = useParams();
  return (
    <Root>
      <StoreOverview id={id} />
      <main>
        <Stores />
      </main>
    </Root>
  )
}
export default Store;