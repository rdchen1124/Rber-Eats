import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background: green;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
const HeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 90px;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
`;
const Nav = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  height: 50px;
  width: 60px;
  cursor: pointer;
  color: black;
  text-decoration: none;
  background: white;
  border-radius: 15px;
  margin-left: 15px;
`
const LeftContainer = styled.div`
  // border: 1px solid black;
  display: flex;
  align-items: center;
`;
const UserButton = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
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
const HeaderCartButton = styled.div`
  width: 100px;
  height: 50px;
  background: white;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LeftContainer>
          <UserButton>
            Ryan
          </UserButton>
          <TitleContainer to='/'>
            Rber Eats
          </TitleContainer>
        </LeftContainer>
        <RightContainer>
          <HeaderCartButton>
            購物車。1
          </HeaderCartButton>
          <Nav to='/login'>登入</Nav>
        </RightContainer>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
export default Header;