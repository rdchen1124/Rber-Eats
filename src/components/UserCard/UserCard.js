import React, {useEffect} from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
  text-decoration: none;
  background:  black;
  box-sizing: border-box;
`;
const LogoutButton = styled(LoginButton)`
`;
const UserCard = (props) => {
  const user = useSelector(store => store.user.user);
  useEffect(()=>{
    document.body.style.overflowY = 'hidden';
    return ()=>{
      document.body.style.overflowY = 'auto';
    }
  }, []);
  return (
    <UserModal>
      {!user && <LoginButton>登入</LoginButton>}
      {user && <LogoutButton>登出</LogoutButton>}
    </UserModal>
  )
}
export default UserCard;