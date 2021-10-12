import React, {useEffect, Fragment} from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { hideUserCard } from '../../redux/reducers/userReducer';
import { UserModal } from '../UI';
import { FavoriteIcon, OrderIcon } from '../UI/Icons';
const LoginButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  height: 50px;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
  color: white;
  background:  black;
  box-sizing: border-box;
  border: none;
  text-decoration: none;
`;
const LogoutButton = styled(LoginButton)`
  margin-top: 20px;
`;
const FavoriteSpan = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
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
const ListItemContainer = styled(Link)`
  height: 60px;
  padding: 5px;
  width: 50%;
  min-width: 150px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  color: black;
  & + & {
    margin-top: 20px;
  }
`
const UserInfoContainer = styled.div`
  height: 60px;
  padding: 5px;
  width: 50%;
  min-width: 150px;
  margin: 0 auto 20px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
`
const UserCard = ({onLogOut}) => {
  const user = useSelector(store => store.user.user);
  const dispatch = useDispatch();
  const history = useHistory();
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
        <div>Hi, {user.name}</div>
      </UserInfoContainer>
      <ListItemContainer to='/orders' onClick={handleItemClick}>
        <span>Orders</span>
        <FavoriteSpan>
          <OrderIcon fill="black"/>
        </FavoriteSpan>
      </ListItemContainer>
      <ListItemContainer to='/' onClick={handleItemClick}>
        <span>Favorites</span>
        <FavoriteSpan>
          <FavoriteIcon fill="black" type="solid" size="20"/>
        </FavoriteSpan>
      </ListItemContainer>
      <ListItemContainer to='/' onClick={handleItemClick}>
        <span>Help</span>
        <FavoriteSpan>
          <FavoriteIcon fill="black" type="solid" size="20"/>
        </FavoriteSpan>
      </ListItemContainer>
      <ListItemContainer to='/' onClick={handleItemClick}>
        <span>Donate</span>
        <FavoriteSpan>
          <FavoriteIcon fill="black" type="solid" size="20"/>
        </FavoriteSpan>
      </ListItemContainer>
      <br />
      <hr />
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