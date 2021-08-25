import React from 'react';
import styled from 'styled-components';
// import { store } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { showUserCard } from '../../redux/reducers/userReducer';

const Button = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`
const UserButton = () => {
  const dispatch = useDispatch();
  const handleShowUserCard = () => {
    dispatch(showUserCard());
  }
  // const isUserCardShowing = useSelector(store => store.user.isUserCardShowing)
  return (
    <Button onClick={handleShowUserCard}>User</Button>
  )
}

export default UserButton;