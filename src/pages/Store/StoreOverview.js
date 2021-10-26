import React, { useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { toggleFavorites } from '../../redux/reducers/userReducer';
import { FavoriteIcon } from '../../components/UI/Icons';
const StoreOverviewWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  height: 300px;
  margin: 0 auto;
  box-sizing: border-box;
  opacity: 0.9;
  background-image: url(${props=>props.$location});
  background-size: cover;
  background-position: center;
`
const StoreOverviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  box-sizing: border-box;

`
const StoreName = styled.div`
  padding-left: 20px;
  color: white;
  font-size: 42px;
  font-weight: bold;
`
const StoreScore = styled.div`
  padding-left: 20px;
  color: white;
  font-size: 28px;
`
const FavoriteContainer = styled.div`
  position: absolute;
  right: 30px;
  bottom: 25px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StoreOverview = ({id, name, score, location}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isHovered, setIsHovered] = useState(false);
  const user = useSelector(store => store.user.user);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  const handleIconClick = (e) => {
    e.stopPropagation();
    if(user.id === 0) {
      history.push({
        pathname: '/login',
        state: { from: history.location.pathname }
      });
      return;
    }
    dispatch(toggleFavorites(id));
  }
  return (
    <StoreOverviewWrapper $location={location}>
      <StoreOverviewContainer>
        <StoreName>{name}</StoreName>
        <StoreScore>評分: {score}</StoreScore>
        <FavoriteContainer
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleIconClick}>
          <FavoriteIcon
            fill={isHovered ? "#D0D0D0":"white"}
            type={user.favorites !== undefined && user.favorites.includes(id) ? "solid" : "hollow"}
            size="50"
            isHovered={isHovered}
          />
        </FavoriteContainer>
      </StoreOverviewContainer>
    </StoreOverviewWrapper>
  )
}
export default StoreOverview