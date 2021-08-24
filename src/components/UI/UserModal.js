import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
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
const ModalOverleyContainer = styled.div`
  background: white;
  position: fixed;
  width: 30%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 40;
`
const ModalOverley = (props) => {
  return (
    <ModalOverleyContainer>{props.children}</ModalOverleyContainer>
  )
}
const portalElement = document.getElementById('userOverlays');
const UserModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverley>{props.children}</ModalOverley>,
        portalElement
      )}
    </Fragment>
  )
}
export default UserModal;