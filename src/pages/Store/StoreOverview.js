import React, { useState } from 'react'
import styled from 'styled-components';
import { FavoriteIcon } from '../../components/UI/Icons';
const StoreOverviewWrapper = styled.div`
  width: 95%;
  height: 250px;
  margin: 0 auto;
  padding: 25px;
  box-sizing: border-box;
`
const StoreOverviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
  box-sizing: border-box;
`
const StoreName = styled.div`
  padding-left: 20px;
  color: black;
  font-size: 42px;
  font-weight: bold;
`
const StoreInfo = styled.div`
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
const StoreOverview = ({id, name, score}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  const handleIconClick = (e) => {
    e.stopPropagation();
    console.log('Icon is clicked!!');
  }
  return (
    <StoreOverviewWrapper>
      <StoreOverviewContainer>
        <StoreName>{name}</StoreName>
        <StoreInfo>評分: {score}</StoreInfo>
        <FavoriteContainer
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleIconClick}>
          <FavoriteIcon
            fill={isHovered ? "#D0D0D0":"white"}
            type="hollow"
            size="50"
            isHovered={isHovered}
          />
        </FavoriteContainer>
      </StoreOverviewContainer>
    </StoreOverviewWrapper>
  )
}
export default StoreOverview