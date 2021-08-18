import React from 'react';
import styled from 'styled-components';
import Root from '../../components/Root';
import Discount from './Discount';
// const Root = styled.div`
//   width: 90%;
//   margin: 0 auto;
//   height: calc(100vh - 90px);
// `
const Home = () => {
  return (
    <Root>
      <Discount />
      Ryan-Eats
    </Root>
  )
}
export default Home;