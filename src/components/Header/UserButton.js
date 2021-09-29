import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { showUserCard } from '../../redux/reducers/userReducer';
import { UserIcon } from '../UI/Icons'; 

const UserButtonSpan = styled.span`
  width: 50%;
  height: 50%;
`;
const Button = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: ${props => props.$active ? '#E7E7E7':'rgba(250, 250, 250)'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;
  pointer-events: ${props => props.$active ? 'none':'auto'};
`
const UserButton = ({$active}) => {
  const dispatch = useDispatch();
  const handleShowUserCard = () => {
    dispatch(showUserCard());
  }
  return (
    <Button $active={$active} onClick={handleShowUserCard}>
      <UserButtonSpan>
        <UserIcon />
      </UserButtonSpan>
    </Button>
  )
}

export default UserButton;