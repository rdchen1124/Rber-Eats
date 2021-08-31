import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MealModal } from "../UI";
import { hideMenu } from "../../redux/reducers/cartReducer";

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
const MealCard = () => {
  const meal = useSelector(store => store.menu.meal);
  const dispatch = useDispatch();
  // useEffect(()=>{
  //   console.log(meal);
  // }, [])
  const handleClose = () => {
    dispatch(hideMenu());
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
      </MealContainer>
    </MealModal>
  )
}
export default MealCard;