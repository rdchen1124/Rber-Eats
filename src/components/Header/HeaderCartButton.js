import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
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
  visibility: ${props => props.$hidden ? 'hidden':'visible'}
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
  display: flex;
  align-items: center;
`
const HeaderCartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(store => store.cart.items)
  const handleShowCart = () => {
    dispatch(toggleCartButton());
  }
  const numberOfCartItems = items.reduce((total, item) => {
    return total + item.amount
  }, 0)
  return (
    <CartButtonWrapper $hidden={props.$hidden} onClick={handleShowCart}>
      <CartIconSpan>
        <CartIcon />
      </CartIconSpan>
      <CartButtonSpan>購物車</CartButtonSpan>
      <CartBadgeSpan>
        { numberOfCartItems }
      </CartBadgeSpan>
    </CartButtonWrapper>
  )
}
export default HeaderCartButton;