import React from 'react';
import styled from 'styled-components';
import Root from '../../components/Root';
import Discount from './Discount';
import Stores from '../../components/Stores';

const Home = () => {
  return (
    <Root>
      <Discount />
      <main>
        <Stores />
      </main>
    </Root>
  )
}
export default Home;