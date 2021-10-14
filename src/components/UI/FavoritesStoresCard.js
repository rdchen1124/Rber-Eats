import React, {Fragment} from 'react';
import styled from 'styled-components';
const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
`
const FavoritesStoresCard = (props) => {
  return (
    <Fragment>
      <StyledUl>
        {props.children}
      </StyledUl>
    </Fragment>
  )
}
export default FavoritesStoresCard;