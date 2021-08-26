import { CartModal } from "../UI";
import styled from "styled-components"; 
import { useDispatch } from "react-redux";
import { hideCart } from "../../redux/reducers/cartReducer";

const CloseButton = styled.div`
  border-radius: 5px;
  background: #f44336;
  color: white;
  height: 30px;
  width: 80px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Cart = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideCart());
  }
  return (
    <CartModal>
      <CloseButton onClick={handleClose}>
        Close
      </CloseButton>
      CartModalContent
    </CartModal>
  )
}
export default Cart;