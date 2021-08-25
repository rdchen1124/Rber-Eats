import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserButton from './UserButton';
import HeaderCartButton from './HeaderCartButton';
const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background: green;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
`;
const HeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 80px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 40px;
  width: 60px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  background: white;
  border-radius: 15px;
  margin-left: 15px;
`;
const LeftContainer = styled.div`
  // border: 1px solid black;
  display: flex;
  align-items: center;
`;
const TitleContainer = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  margin-left: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  color: black;
  padding: 10px;
`;
const RightContainer = styled.div`
  // border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LeftContainer>
          <UserButton />
          <TitleContainer to='/'>
            Rber Eats
          </TitleContainer>
        </LeftContainer>
        <RightContainer>
          <HeaderCartButton />
          <Nav to='/login'>登入</Nav>
        </RightContainer>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
export default Header;