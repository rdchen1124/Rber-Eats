import styled from "styled-components";
const OrderCheckModalWrapper = styled.div`
  background: white;
  position: fixed;
  width: auto;
  top: 10%;
  left: 30%;
  right: 30%;
  bottom: 50%;
  z-index: 40;
  padding: 15px 20px;
`;
const OrderCheckModal = (props) => {
  return (
    <OrderCheckModalWrapper>
      <div>是否建立新訂單?</div>
      <div>您的購物車已有來自不同商店的商品，請先清空或結帳</div>
      <div>
        <button onClick={props.onClose}>取消</button>
        <button onClick={props.onCreate}>新訂單</button>
      </div>
    </OrderCheckModalWrapper>
  )
}
export default OrderCheckModal;