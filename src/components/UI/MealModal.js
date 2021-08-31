import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
// import { store } from '../../redux/store';
// import { useDispatch, useSelector } from 'react-redux';
// import { hideUserCard } from '../../redux/reducers/userReducer';
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

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalOverleyContainer = styled.div`
  background: white;
  position: fixed;
  width: 90%;
  top: 0;
  left: 5%;
  bottom: 0;
  z-index: 40;
  padding: 15px 20px;
  animation: 300ms ${slideUp} ease-out;
`;

const ModalOverley = (props) => {
  return (
    <ModalOverleyContainer open={props.isShow}>{props.children}</ModalOverleyContainer>
  )
}

const portalElement = document.getElementById('userOverlays');
const MealModal = (props) => {
  // const isUserCardShowing = useSelector(store => store.user.isUserCardShowing)
  // const dispatch = useDispatch();
  const handleClose = () => {
    // dispatch(hideUserCard())
  }
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={handleClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverley isShow={true}>{props.children}</ModalOverley>,
        portalElement
      )}
    </Fragment>
  )
}
export default MealModal;