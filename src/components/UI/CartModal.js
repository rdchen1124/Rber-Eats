import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
// import { store } from '../../redux/store';
// import { useDispatch, useSelector } from 'react-redux';
// import { hideUserCard } from '../../redux/reducers/userReducer';


const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOverleyContainer = styled.div`
  background: white;
  position: fixed;
  width: 25%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
  padding: 15px 20px;
  animation: 300ms ${slideDown} ease-out;
`;

const ModalOverley = (props) => {
  return (
    <ModalOverleyContainer open={props.isShow}>{props.children}</ModalOverleyContainer>
  )
}

const portalElement = document.getElementById('userOverlays');
const CartModal = (props) => {
  // const isUserCardShowing = useSelector(store => store.user.isUserCardShowing)
  // const dispatch = useDispatch();
  // const handleClose = () => {
  //   dispatch(hideUserCard())
  // }
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverley isShow={true}>{props.children}</ModalOverley>,
        portalElement
        // <ModalOverley isShow={isUserCardShowing}>{props.children}</ModalOverley>,
        // portalElement
      )}
    </Fragment>
  )
}
export default CartModal;