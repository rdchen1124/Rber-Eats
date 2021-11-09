import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setIsNeedCutlery } from "../../redux/reducers/cartReducer"
const CutleryLabel = styled.label`
  height: 100%;
  width: -webkit-fill-available;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const CutleryCheckInput = styled.input`
  width: 25px;
  height: 25px;
`
const CartRemark = () => {
  const dispatch = useDispatch();
  const isNeedCutlery = useSelector(store => store.cart.isNeedCutlery);
  const handleCutleryCheck = (e) => {
    dispatch(setIsNeedCutlery(e.target.checked));
  }  
  return (
    <Fragment>
      <CutleryLabel htmlFor="cutlery">索取餐具、吸管等用品</CutleryLabel>
      <CutleryCheckInput 
          type="checkbox"
          id="cutlery"
          defaultChecked={isNeedCutlery}
          onClick={handleCutleryCheck}
        />
    </Fragment>
  )
}
export default CartRemark;