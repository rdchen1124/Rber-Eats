import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CartModal } from "../UI";
import styled from "styled-components"; 
import { useDispatch } from "react-redux";
import { hideCart } from "../../redux/reducers/cartReducer";
import CartItem from "./CartItem";

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  border-radius: 50%;
  background: #E7E7E7;
  color: black;
  height: 30px;
  width: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`
const CheckoutButton = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5%;
  right: 5%;
  background: ${props => props.$empty ? "grey":"black"};
  color: white;
  height: 35px;
  cursor: ${props => props.$empty ? "not-allowed":"pointer"};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`
const CartBodyWrapper = styled.div`
  box-sizing: border-box;
  height: 80%;
  margin: 35px 0;
`
const CartBody = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`
const CartBodyHeader = styled.div`
  box-sizing: border-box;  
  height: 25%;
  padding: 5px;
`
const CartBodyTitle = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 5px;
`
const CartBodyInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const CartStoreTitle = styled.span`
  color: #555555;
`
const CartStoreName = styled.span`
  color: #4CAF50;
`
const CartBodyContent = styled.div`
  box-sizing: border-box;  
  height: 75%;
  overflow-y: auto;
  margin-top: 30px 0;
`
const CartBodyRemark = styled.div`
  height: 50px;
  border: none;
  margin: 10px auto 0px;
  width: 80%;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const EmptyCartBody = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  color: grey;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const Cart = (props) => {
  const items = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideCart());
  }
  const handleCheckoutClick = (e) => {
    e.preventDefault();
    if(!items.length){
      return;
    }
    console.log('Go Checkout!!');
  }
  const cartContent = (
    <CartBody>
      <CartBodyHeader>
        <CartBodyTitle>您的訂單</CartBodyTitle>
        <CartBodyInfo>
          <CartStoreTitle>訂餐餐廳:</CartStoreTitle>
          <CartStoreName>StoreName</CartStoreName>
        </CartBodyInfo>
      </CartBodyHeader>
      <CartBodyContent> 
        {items.map(item => 
          <CartItem
            key={item.id}
            amount={item.amount}
            name={item.name}
            price={item.price} 
          />
        )}
        <CartBodyRemark>
          索取餐具、吸管等用品
        </CartBodyRemark>
      </CartBodyContent>
    </CartBody> 
  )
  const emptyCart = (
    <EmptyCartBody>
      您的購物車空空空空空如也
    </EmptyCartBody>
  )
  return (
    <CartModal className={props.className}>
      <CartBodyWrapper>
        <CloseButton onClick={handleClose}>
          x
        </CloseButton>
        {!items.length && emptyCart}
        {items.length!==0 && cartContent}
        <CheckoutButton 
          onClick={handleCheckoutClick}
          $empty={!items.length}
        >結帳</CheckoutButton>
      </CartBodyWrapper>
    </CartModal>
  )
}
export default Cart;