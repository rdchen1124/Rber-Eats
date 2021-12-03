import React, {useEffect, Fragment} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { hideUserCard } from '../../redux/reducers/userReducer';
import { UserModal } from '../UI';
import { FavoriteIcon, OrderIcon, HelpIcon, ContactIcon } from '../UI/Icons';
const LoginButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  height: 50px;
  width: 190px;
  margin: 30px auto 0;
  cursor: pointer;
  color: white;
  background:  black;
  box-sizing: border-box;
  border: none;
  text-decoration: none;
  &:hover{
    background: rgba(0,0,0,0.8);
  }
`;
const LogoutButton = styled(LoginButton)`
  margin-top: 35px;
`;
const IconSpan = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextSpan = styled.span`
  width: 80px;
  padding: 5px;
`
const UserImage = styled.div`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: skyblue;
  color: white;
`
const UserName = styled.div`
  height: 50px;
  width: 100px;
  padding: 5px;
  word-break:break-all;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ListItemContainer = styled(Link)`
  height: 60px;
  padding: 5px;
  width: 190px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover {
    background: rgb(231 231 231);
  }
  & + & {
    margin-top: 20px;
  }
`
const UserInfoContainer = styled.div`
  height: 60px;
  padding: 5px;
  width: 170px;
  min-width: 150px;
  margin: 0 auto 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
`
const UserCard = ({onLogOut}) => {
  const user = useSelector(store => store.user.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;
  const linkLoginObj = {pathname: '/login', state: {from: pathname}}
  useEffect(()=>{
    document.body.style.overflowY = 'hidden';
    return ()=>{
      document.body.style.overflowY = 'auto';
    }
  }, []);
  const handleLoginClick = () => {
    dispatch(hideUserCard());
  }
  const handleLogoutClick = () => {
    onLogOut();
    dispatch(hideUserCard());
  }
  const handleItemClick = (e) => {
    dispatch(hideUserCard());
  }
  const userContent = (
    <Fragment>
      <UserInfoContainer>
        <UserImage>{user.name[0]}</UserImage>
        <UserName>{user.name}</UserName>
      </UserInfoContainer>
      <ListItemContainer to='/orders' onClick={handleItemClick}>
        <IconSpan>
          <OrderIcon fill="black"/>
        </IconSpan>
        <TextSpan>Orders</TextSpan>
      </ListItemContainer>
      <ListItemContainer to='/favorites' onClick={handleItemClick}>
        <IconSpan>
          <FavoriteIcon fill="black" type="solid" size="20"/>
        </IconSpan>
        <TextSpan>Favorites</TextSpan>
      </ListItemContainer>
      <ListItemContainer as='a' href='https://github.com/rdchen1124/Rber-Eats' target="_blank">
        <IconSpan>
          <HelpIcon fill="black" type="solid" size="20"/>
        </IconSpan>
        <TextSpan>Help</TextSpan>
      </ListItemContainer>
      <ListItemContainer to='/' onClick={handleItemClick}>
        
        <IconSpan>
          <ContactIcon fill="black" type="solid" size="20"/>
        </IconSpan>
        <TextSpan>Contact</TextSpan>
      </ListItemContainer>
      <LogoutButton as='button' onClick={handleLogoutClick}>登出</LogoutButton>
    </Fragment>
  );
  const guestContent = (
    <Fragment>
      <LoginButton to={linkLoginObj} onClick={handleLoginClick}>登入</LoginButton>
    </Fragment>
  );
  return (
    <UserModal>
      {user.id === 0 && guestContent}
      {user.id !== 0 && userContent}
    </UserModal>
  )
}
export default UserCard;