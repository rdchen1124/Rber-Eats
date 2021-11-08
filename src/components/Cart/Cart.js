import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { CartModal } from "../UI";
import styled from "styled-components"; 
import { useDispatch } from "react-redux";
import { hideCart, setIsNeedCutlery } from "../../redux/reducers/cartReducer";
import CartItem from "./CartItem";
import { setCart } from "../../utils";
import { XIcon } from "../UI/Icons";

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
  bottom: 10px;
  left: 3%;
  right: 3%;
  background: black;
  color: white;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
`
const TotalNumberSpan = styled.div`
  border: 1px solid white;
  padding: 5px 10px;
`
const CheckoutSpan = styled.div`
`
const TotalAmountSpan = styled.div`
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

`
const StoreLink = styled(Link)`
  text-decoration: underline;
  color: #008CBA;
`;
const CartBodyContent = styled.div`
  box-sizing: border-box;  
  height: 60%;
  overflow-y: auto;
  padding: 10px 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
`
const CartBodyRemark = styled(CheckoutButton)`
  position: absolute;
  height: 50px;
  margin: 10px auto 0px;
  padding: 0 10px;
  bottom: 65px;
  color: black;
  background: rgba(0, 0, 0, 0.15);
  justify-content: space-between;
  & * {
    cursor: pointer;
  }
`
const CutleryCheckInput = styled.input`
  width: 25px;
  height: 25px;
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
  const history = useHistory();
  const items = useSelector(store => store.cart.items);
  const totalAmount = useSelector(store => store.cart.totalAmount);
  const cartStore = useSelector(store => store.cart.cartStore);
  const isNeedCutlery = useSelector(store => store.cart.isNeedCutlery);
  const user = useSelector(store => store.user.user);
  const numberOfItems = items.reduce((total, item)=>{
    return total + item.amount;
  },0)
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideCart());
  }
  const handleCheckoutClick = (e) => {
    e.preventDefault();
    if(user.id !== 0){
      history.push('/checkout');
    }else{
      history.push({
        pathname: '/login',
        state: { from: '/checkout' }
      });
    }
    dispatch(hideCart());
  }
  const handleCutleryCheck = (e) => {
    dispatch(setIsNeedCutlery(e.target.checked));
  }
  useEffect(()=>{
    const cart = {
      items,
      cartStore
    }
    setCart(cart);
  }, [items, cartStore]);
  const cartContent = (
    <CartBody>
      <CartBodyHeader>
        <CartBodyTitle>您的訂單</CartBodyTitle>
        <CartBodyInfo>
          <CartStoreTitle>訂餐餐廳:</CartStoreTitle>
          <CartStoreName>
            <StoreLink to={`/store/${cartStore.store_id}`} target="_top">
              {cartStore.name}
            </StoreLink>
          </CartStoreName>
        </CartBodyInfo>
      </CartBodyHeader>
      <CartBodyContent> 
        {items.map(item => 
          <CartItem
            key={item.id}
            id={item.id}
            mealId={item.mealId}
            amount={item.amount}
            name={item.name}
            price={item.price} 
          />
        )}
      </CartBodyContent>
    </CartBody> 
  )
  const emptyCart = (
    <EmptyCartBody>
      您的購物車空空空空空如也
    </EmptyCartBody>
  )
  const buttonGroup = (
    <Fragment>
      <CartBodyRemark>
        <label htmlFor="cutlery">索取餐具、吸管等用品</label>
        <CutleryCheckInput 
          type="checkbox"
          id="cutlery"
          defaultChecked={isNeedCutlery}
          onClick={handleCutleryCheck}
        />
      </CartBodyRemark>
      <CheckoutButton 
        onClick={handleCheckoutClick}
      >
        <TotalNumberSpan>{numberOfItems}</TotalNumberSpan>
        <CheckoutSpan>結帳</CheckoutSpan>
        <TotalAmountSpan>NT.{totalAmount}</TotalAmountSpan>
      </CheckoutButton>
    </Fragment>
  )
  return (
    <CartModal className={props.className}>
      <CartBodyWrapper>
        <CloseButton onClick={handleClose}>
          <XIcon fill="black" size="16px"/>
        </CloseButton>
        {!items.length && emptyCart}
        {items.length !== 0 && cartContent}
        {items.length !== 0 && buttonGroup}
      </CartBodyWrapper>
    </CartModal>
  )
}
export default Cart;