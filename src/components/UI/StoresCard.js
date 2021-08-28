import React from 'react';
import styled from 'styled-components';
const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
  justify-content:center;
`
const StoresCard = (props) => {
  return (
    <div>
      <StyledUl>
        {props.children}
      </StyledUl>
    </div>
  )
}
export default StoresCard;