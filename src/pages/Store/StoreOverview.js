import React from 'react'
import styled from 'styled-components';
const StoreOverviewWrapper = styled.div`
  width: 90%;
  height: 200px;
  margin: 0 auto;
  padding: 25px 10px;
`
const StoreOverviewContainer = styled.div`
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
const StoreOverview = ({id, name, score}) => {
  return (
    <StoreOverviewWrapper>
      <StoreOverviewContainer>
        <StoreName>{name}</StoreName>
        <StoreInfo>評分: {score}</StoreInfo>
      </StoreOverviewContainer>
    </StoreOverviewWrapper>
  )
}
export default StoreOverview