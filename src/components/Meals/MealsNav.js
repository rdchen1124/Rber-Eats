import React from 'react';
import styled from 'styled-components';
const MealsNavWrapper = styled.div`
  width: 100%;
  padding: 0 10px;
  margin: 10px auto;
  height: 90px;
`
const MealsNavBar = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  color: green;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MealsNav = ({id}) => {
  return (
    <MealsNavWrapper>
      <MealsNavBar>
        MealsNav_{id}
      </MealsNavBar>
    </MealsNavWrapper>
  )
}
export default MealsNav;