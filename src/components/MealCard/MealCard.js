import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MealModal } from "../UI";
import { hideMenu, showCheckModal, hideCheckModal } from "../../redux/reducers/menuReducer";
import { 
  showCart, addToCart, createNewOrder,
  setCartStore, setTempStore, setTempOrder
} from "../../redux/reducers/cartReducer";
import MealCardForm from "./MealCardForm";
import { setCart } from "../../utils";
import { XIcon } from "../UI/Icons";
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
  left: 10px;
  top: 10px;
  background: white;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: rgba(231, 231, 231);
  }
`
const Close = ({onClose}) => {
  return( 
    <CloseButton onClick={onClose}>
      <XIcon fill="black" size="20px"/>
    </CloseButton>
  )
}
const MealImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`
const ImageContainer = styled.div`
  width: 100%;
  height: 45%;
  background: rgb(231 231 231);
  color: white;
  font-size: 28px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MealInfoContainer = styled.div`
  width: 100%;
  height: ${props => props.$hasImage ? "calc(55% - 50px - 15px)":"calc(100% - 50px - 50px - 15px)"};
  padding: 15px 20px;
  box-sizing: border-box;
  overflow-y: auto;
  margin-top: ${props => props.$hasImage ? "0px":"50px"};
`;
const MealName = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: black;
  margin-bottom: 10px;
`
const MealDescription = styled(MealName)`
  font-size: 16px;
  font-weight: normal;
  color: grey;
`
const MealPrice = styled(MealDescription)`
  font-size: 16px;
  font-weight: normal;
  color: black;
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
  const isOrderChecking = useSelector(store => store.menu.isOrderChecking);
  const tempStore = useSelector(store => store.cart.tempStore);
  const tempOrder = useSelector(store => store.cart.tempOrder);
  const dispatch = useDispatch();
  useEffect(()=>{
    document.body.style.overflowY = 'hidden';
    return ()=>{
      document.body.style.overflowY = 'auto';
    }
  }, []);
  const handleClose = () => {
    dispatch(hideMenu());
    if(isOrderChecking){
      // 取消鈕(點選取消加入購物車):
      // 關閉 CheckOrderModal
      dispatch(hideCheckModal());
    }
  }
  const handleCreateNewOrder = () => {
    // 新訂單鈕(點選開新訂單):
    // 1. 新增店家 & 建立新訂單
    dispatch(setCartStore(tempStore));
    dispatch(createNewOrder(tempOrder));
    // 2. 關閉 Menu & CheckOrderModal
    dispatch(hideMenu());
    dispatch(hideCheckModal());
    // 3. 開啟購物車 showCart
    window.scrollTo({top: 0, behavior: 'smooth'});
    dispatch(showCart());
  }
  const handleAddToCart = (amount) => {
    const newId = items.length ? (items[items.length-1]['id']+1):1;
    const order = {
      id: newId,
      mealId : meal.meal_id,
      name: meal.name,
      price: meal.price,
      amount
    }
    if(!cartStore.id){// 購物車為空
      // 1. 儲存目前 cartStore
      dispatch(setCartStore(store));
    }else{// 購物車有商品
      if(cartStore.id !== store.id){// 新增的商品為不同店家
        // 1. 儲存目前 cartStore & order
        dispatch(setTempStore(store));
        const tempOrder = {...order, id: 1};
        dispatch(setTempOrder(tempOrder));
        // 2. 顯示 CheckOrderModal 顯示
        dispatch(showCheckModal());
        return;
      }
    }
    // 購物車為空 或 新增商品為同店家
    // 2. 新增此項目至目前 items
    dispatch(addToCart(order));
    // 3. 關閉 Menu
    dispatch(hideMenu());
    // 4. 開啟購物車 showCart
    window.scrollTo({top: 0, behavior: 'smooth'});
    dispatch(showCart());
  }
  return (
    <MealModal
      cartStore={cartStore.name}
      tempStore={tempStore.name}
      onClose={handleClose}
      onCreate={handleCreateNewOrder}
      $hasImage={meal.img!==""}
    >
      <MealContainer>
        <Close onClose={handleClose} />
        {
          meal.img !== "" &&
          <ImageContainer>
            <MealImage src={meal.img} />
          </ImageContainer>
        }
        <MealInfoContainer $hasImage={meal.img!==""}>
          <MealName>{meal.name}</MealName>
          <MealDescription>{meal.description}</MealDescription>
          <MealPrice>{"NT."}{meal.price}</MealPrice>
        </MealInfoContainer>
        <MealFormContainer>
          <MealCardForm price={meal.price} onAddToCart={handleAddToCart} />
        </MealFormContainer>
      </MealContainer>
    </MealModal>
  )
}
export default MealCard;