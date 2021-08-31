import React from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { showMenu } from "../../../redux/reducers/cartReducer"

const ListItem = styled.li`
  box-sizing: border-box;
  flex: 0 0 30%;
  margin: 20px 10px;
  cursor: pointer;
`
const MealWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding-left: 15px;
  display: flex;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.8);
  }
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
  height: 150px;
  background: gray;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
  font-size: 22px;
`

const MealItem = ({id, name, img, price, description}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(showMenu());
  }
  return (
    <ListItem onClick={handleClick}>
      <MealWrapper>
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