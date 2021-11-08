import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartButton } from "../../redux/reducers/cartReducer";
import { CartIcon } from "../UI/Icons";
const CartButtonWrapper = styled.div`
  height: 50px;
  min-width: 132.8px;
  background: rgba(0,0,0,0.9);
  color: white;
  border-radius: 30px;
  padding: 0px 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  visibility: ${props => props.$hidden ? 'hidden':'visible'};
  &:hover {
    background: rgba(37, 37, 37);
  }
`;
const CartButtonSpan = styled.span`
  height: 1.35rem;
  & + & {
    margin-left: 10px;
  }
`
const CartIconSpan = styled(CartButtonSpan)`
  width: 1.35rem;
`;
const CartBadgeSpan = styled(CartButtonSpan)`
  color: white;
  border: 1px solid rgba(250,250,250, 0.5);
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