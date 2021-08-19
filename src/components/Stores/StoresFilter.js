import React from 'react';
import styled from 'styled-components';
const StoresFilterWrapper = styled.div`
  width: 90%;
  padding: 0 10px;
  margin: 10px auto;
  height: 90px;
`
const StoresFilterBar = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StoresFilter = () => {
  return (
    <StoresFilterWrapper>
      <StoresFilterBar>
        Filters
      </StoresFilterBar>
    </StoresFilterWrapper>
  )
}
export default StoresFilter;