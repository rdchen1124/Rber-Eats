import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalOverleyContainer = styled.div`
  background: white;
  position: fixed;
  width: 30%;
  height: 30%;
  top: 6rem;
  right: 10rem;
  z-index: 20;
  padding: 15px 20px;
  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  /* For Transition */
  transition: 300ms;
  /* Hidden init state */
  opacity: 0;
  transform: translateY(-3rem);
  &.enter, &.entered {
    /* Animate in state */
    opacity: 1;
    transform: translateY(0rem);
  }
  &.exit, &.exited {
    /* Animate out state */
    opacity: 0;
    transform: translateY(-3rem);
  }
`;

const ModalOverley = (props) => {
  return (
    <ModalOverleyContainer className={props.className} isShowCart={props.isShowCart}>
      {props.children}
    </ModalOverleyContainer>
  )
}

const portalElement = document.getElementById('userOverlays');
const CartModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverley
          className={props.className}
          isShowCart={true}
        >
          {props.children}
        </ModalOverley>,
        portalElement
      )}
    </Fragment>
  )
}
export default CartModal;