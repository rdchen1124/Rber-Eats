import React, { Fragment, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { MTRoot } from '../../components/Root';
import Stores from '../../components/Stores';
import mealsBanner from '../../assets/veestro_banner.jpg';
const BannerWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
` 
const BannerTitle = styled.div`
  position: absolute;
  top: 20%;
  left: 50px;
  font-size: 22px;
  font-weight: bold;
  color: white;
`
const BannerImage = styled.img`
  width: 100vw;
  height: 350px;
`
const Home = () => {
  useLayoutEffect(()=>{
    document.body.style.background = 'rgba(231, 231, 231)';
    return ()=>{
      document.body.style.background = 'white';
    }
  }, []);
  return (
    <Fragment>
      <BannerWrapper>
        <BannerTitle>Hello, you can order anything you want here</BannerTitle>
        <BannerImage src={mealsBanner} alt='Rber Eats' />
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