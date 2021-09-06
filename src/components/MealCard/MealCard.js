import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MealModal } from "../UI";
import { hideMenu } from "../../redux/reducers/menuReducer";
import { addToCart, setCartStore } from "../../redux/reducers/cartReducer";
import MealCardForm from "./MealCardForm";

const MealContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  left: 5px;
  top: 5px;
  background: white;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: grey;
  }
`
const Close = ({onClose}) => {
  return( 
    <CloseButton onClick={onClose}>X</CloseButton>
  )
}
const ImageContainer = styled.div`
  width: 100%;
  height: 40%;
  background: black;
  color: white;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MealInfoContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 15px 20px;
  box-sizing: border-box;
  overflow-y: auto;
`;
const MealName = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`
const MealDesctiption = styled.div`
  font-size: 16px;
  font-weight: normal;
  color: grey;
  margin-bottom: 10px;
`
const MealFormContainer = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  box-sizing: border-box;
`
const MealCard = () => {
  const meal = useSelector(store => store.menu.meal);
  const items = useSelector(store => store.cart.items);
  const store = useSelector(store => store.store.store);
  const cartStore = useSelector(store => store.cart.cartStore);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideMenu());
  }
  const handleAddToCart = (amount) => {
    const newId = items.length ? (items[items.length-1]['id']+1):1;
    const order = {
      id: newId,
      mealId : meal.id,
      name: meal.name,
      price: meal.price,
      amount
    }
    if(!cartStore.id){// 購物車為空
      dispatch(setCartStore({...store}));
    }else{// 購物車有商品
      if(cartStore.id !== store.id){// 新增的商品為不同店家
        alert('您的購物車已有來自不同商店的商品，請先清空或結帳!');
        // 1. 儲存目前 cartStore & order 為 tempCartStore & tempOrder
        // const tempOrder = {...order, id: 1};
        // 2. 關閉 Cart ( dispatch(hideCart))
        // 3. 讓 CheckOrderModal 顯示 (isCheckOrderModal = true)
        return;
        
        // CheckOrderModal 的部分
        // 新訂單鈕(點選開新訂單):
        // 1. 新增店家 dispatch(setCartStore({...tempCartStore}));
        // 2. 加入商品 dispatch(addToCart(tempOrder));
        // 3. 關閉 CheckOrderModal
        // 取消鈕(點選取消加入購物車):
        // 1. 清空 tempCartStore & tempOrder
        // 2. 關閉 CheckOrderModal
      }
    }
    // 購物車為空 或 新增商品為同店家
    dispatch(addToCart(order));
    console.log(`Add ${amount} items To Cart!!`);
  }
  return (
    <MealModal onClose={handleClose}>
      <MealContainer>
        <Close onClose={handleClose} />
        <ImageContainer>{meal.img}</ImageContainer>
        <MealInfoContainer>
          <MealName>{meal.name}</MealName>
          <MealDesctiption>{meal.description}</MealDesctiption>
          <div>{meal.price}</div>
        </MealInfoContainer>
        <MealFormContainer>
          <MealCardForm price={meal.price} onAddToCart={handleAddToCart} />
        </MealFormContainer>
      </MealContainer>
    </MealModal>
  )
}
export default MealCard;