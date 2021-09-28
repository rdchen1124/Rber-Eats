import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { store } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { hideUserCard } from '../../redux/reducers/userReducer';
const BackdropContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 30;
`
const Backdrop = (props) => {
  return (
    <BackdropContainer onClick={props.onClose} />
  )
}

const slideRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-3rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ModalOverlayContainer = styled.div`
  background: white;
  position: fixed;
  width: 20%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 40;
  padding: 15px 20px;
  animation: 300ms ${slideRight} ease-out;
`;

const ModalOverlay = (props) => {
  return (
    <ModalOverlayContainer open={props.isShow}>{props.children}</ModalOverlayContainer>
  )
}

const portalElement = document.getElementById('userOverlays');
const UserModal = (props) => {
  const isUserCardShowing = useSelector(store => store.user.isUserCardShowing)
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideUserCard())
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={handleClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay isShow={isUserCardShowing}>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  )
}
export default UserModal;