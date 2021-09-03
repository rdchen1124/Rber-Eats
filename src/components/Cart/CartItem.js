import styled from "styled-components";
const CartItemWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & + & {
    margin-top: 5px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }
`
const CartItem = ({amount, name, price}) => {
  return (
    <CartItemWrapper>
      <div>{amount}</div>
      <div>{name}</div>
      <div>NT{price}</div>
    </CartItemWrapper>
  )
}
export default CartItem;