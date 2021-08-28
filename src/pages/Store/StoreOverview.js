import React from 'react'
import styled from 'styled-components';
const StoreOverviewWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin: 0 auto;
  padding: 25px 10px;
`
const StoreOverviewContainer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 20px;
`
const StoreName = styled.div`
  color: black;
  font-size: 42px;
  font-weight: bold;
`
const StoreInfo = styled.div`
  color: white;
  font-size: 28px;
`
const StoreOverview = ({id}) => {
  return (
    <StoreOverviewWrapper>
      <StoreOverviewContainer>
        <StoreName>Store_{id}</StoreName>
        <StoreInfo>評分: 4.7</StoreInfo>
      </StoreOverviewContainer>
    </StoreOverviewWrapper>
  )
}
export default StoreOverview