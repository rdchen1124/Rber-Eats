import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { MTRoot } from '../../components/Root';
import Stores from '../../components/Stores';
import mealsBanner from '../../assets/veestro_banner.jpg';
import { getStores } from '../../WebApi';
import { setStores } from '../../redux/reducers/storeReducer';
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
  const dispatch = useDispatch();
  useEffect(()=>{
    getStores().then(data => {
      dispatch(setStores(data));
    });
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