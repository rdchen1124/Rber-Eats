import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { toggleCartButton } from "../../redux/reducers/cartReducer";
import { CartIcon } from "../UI/Icons";
const CartButtonWrapper = styled.div`
  width: 140px;
  height: 50px;
  background: black;
  color: white;
  border-radius: 15px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;
const CartButtonSpan = styled.span`
  height: 1.35rem;
`
const CartIconSpan = styled(CartButtonSpan)`
  width: 1.35rem;
`;
const CartBadgeSpan = styled(CartButtonSpan)`
  background-color: white;
  color: black;
  padding: 0.2rem 1.0rem;
  border-radius: 25px;
  font-weight: bold;
`
const HeaderCartButton = () => {
  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(toggleCartButton());
  }
  return (
    <CartButtonWrapper onClick={handleShowCart}>
      <CartIconSpan>
        <CartIcon />
      </CartIconSpan>
      <CartButtonSpan>購物車</CartButtonSpan>
      <CartBadgeSpan>1</CartBadgeSpan>
    </CartButtonWrapper>
  )
}
export default HeaderCartButton;