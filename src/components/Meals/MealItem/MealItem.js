import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { showMenu, setMeal } from "../../../redux/reducers/menuReducer"

const ListItem = styled.li`
  box-sizing: border-box;
  flex: 0 0 30%;
  margin: 20px 10px;
  cursor: pointer;
`
const MealWrapper = styled.div`
  position: relative;
  border: 2px solid;
  border-color: ${props=>props.$inCart ? '#4CAF50':'rgba(0, 0, 0, 0.3)'};
  border-radius: 5px;
  padding-left: 15px;
  display: flex;
  min-width: 215px;
  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.8);
  }
`
const CartCountContainer = styled.div`
  position: absolute;
  background: #4CAF50;
  color: white;
  height: 30px;
  width: 30px;
  right: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MealInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: auto;
  width: 60%;
`
const NameContainer = styled.div`
  height: fit-content;
  width: 100%;
  background: #4CAF50;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  color: black;
  font-size: 24px;
  margin-bottom: 10px;
`
const DescriptionContainer = styled.div`
  height: fit-content;
  width: 100%;
  background: #F44336;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: #555555;
  font-size: 18px;
`
const NonePriceContainer = styled.div`
  width: 100%;
`
const PriceContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #008CBA;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImageContainer = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  width: 40%;
  height: 200px;
  background: gray;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
  font-size: 22px;
`

const MealItem = ({id, name, img, price, description, numberInCart}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setMeal({
      id,
      name,
      img,
      price,
      description
    }));
    dispatch(showMenu());
  }
  const countContainer = (
    <CartCountContainer>
      {numberInCart}
    </CartCountContainer>
  )
  return (
    <ListItem onClick={handleClick}>
      <MealWrapper $inCart={numberInCart > 0}>
        {numberInCart > 0 && countContainer}
        <MealInfoContainer>
          <NonePriceContainer>
            <NameContainer>
              {name}
            </NameContainer>
            <DescriptionContainer>
              {description}
            </DescriptionContainer>
          </NonePriceContainer>
          <PriceContainer>
            NT{price}
          </PriceContainer>
        </MealInfoContainer>
        <ImageContainer>
          {img}
        </ImageContainer>
      </MealWrapper>
    </ListItem>
  )
}
export default MealItem;