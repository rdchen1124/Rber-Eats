import React, {useEffect, Fragment} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { hideUserCard } from '../../redux/reducers/userReducer';
import { UserModal } from '../UI';
const LoginButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  height: 50px;
  width: 100%;
  cursor: pointer;
  color: white;
  background:  black;
  box-sizing: border-box;
  border: none;
  text-decoration: none;
`;
const LogoutButton = styled(LoginButton)`
`;
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
  const userLoginContent = (
    <Fragment>
      <LogoutButton as='button' onClick={handleLogoutClick}>登出</LogoutButton>
    </Fragment>
  );
  const userLogoutContent = (
    <Fragment>
      <LoginButton to={linkLoginObj} onClick={handleLoginClick}>登入</LoginButton>
    </Fragment>
  );
  return (
    <UserModal>
      {!user && userLogoutContent}
      {user && userLoginContent}
    </UserModal>
  )
}
export default UserCard;