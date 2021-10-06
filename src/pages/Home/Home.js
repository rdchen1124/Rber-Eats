import React from 'react';
import styled from 'styled-components';
import Root from '../../components/Root';
import Stores from '../../components/Stores';
import mealsBanner from '../../assets/veestro_banner.jpg';
const BannerWrapper = styled.div`
  position: relative;
  width: 100%;
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
  height: 25vw;
`
const Home = () => {
  return (
    <Root>
      <BannerWrapper>
        <BannerTitle>Hello, you can order anything you want here</BannerTitle>
        <BannerImage src={mealsBanner} alt='Rber Eats' />
      </BannerWrapper>
      <main>
        <Stores />
      </main>
    </Root>
  )
}
export default Home;