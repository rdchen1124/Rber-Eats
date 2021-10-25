import React, { Fragment } from 'react';
import styled from 'styled-components';
import { MTRoot } from '../../components/Root';
import Stores from '../../components/Stores';
import mealsBanner from '../../assets/food.jpg';
const BannerWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  margin: 1px auto 0;
  width: 100%;
  height: 35%;
  background-image: url(${mealsBanner});
  background-size: contain;
  background-position: center;
  min-height: 350px;
` 
const BannerTitle = styled.div`
  position: absolute;
  top: 15%;
  left: 50px;
  font-size: 22px;
  font-weight: bold;
  color: white;
`
const Home = () => {
  return (
    <Fragment>
      <BannerWrapper>
        <BannerTitle>Hello, you can order anything you want here</BannerTitle>
      </BannerWrapper>
      <MTRoot>
        <main>
          <Stores />
        </main>
      </MTRoot>
    </Fragment>
  )
}
export default Home;