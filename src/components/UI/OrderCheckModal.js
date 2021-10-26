import styled from "styled-components";
import { XIcon } from "./Icons";
const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  left: 5px;
  top: 5px;
  background: white;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: grey;
  }
`
const Close = (props) => {
  return( 
    <CloseButton onClick={props.onClose}>
      <XIcon fill="black" size="16px"/>
    </CloseButton>
  )
}

const OrderButton = styled.div`
  background: black;
  color: white;
  position: absolute;
  width: auto;
  left: 5%;
  right: 5%;
  bottom: 10px;
  cursor: pointer;
  height: 40px;
  padding: 5px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Order = (props) => {
  return <OrderButton onClick={props.onCreate}>{props.children}</OrderButton>
}

const CheckModalWrapper = styled.div`
  background: white;
  position: fixed;
  width: auto;
  top: 10%;
  left: 30%;
  right: 30%;
  bottom: 60%;
  z-index: 40;
  padding: 15px 20px;
`;
const CheckModalContent = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 80px);
  margin: 40px auto;
`
const CheckModalHeader = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`
const CheckModalBody = styled.div`
  height: calc(100% - 80px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`
const StoreSpan = styled.span`
  font-weight: bold;
`
const OrderCheckModal = (props) => {
  return (
    <CheckModalWrapper>
      <CheckModalContent>
        <Close onClose={props.onClose} />
        <CheckModalHeader>是否建立新訂單?</CheckModalHeader>
        <CheckModalBody>
          您的訂單含有<StoreSpan>{props.cartStore}</StoreSpan>提供的餐點。
          建立新訂單，即可新增<StoreSpan>{props.tempStore}</StoreSpan>提供的餐點。
        </CheckModalBody>
        <Order onCreate={props.onCreate}>新訂單</Order>
      </CheckModalContent>
    </CheckModalWrapper>
  )
}
export default OrderCheckModal;