import React from "react"
import styled from "styled-components"

const ListItem = styled.li`
  margin-bottom: 20px;
  box-sizing: border-box;
  flex: 0 0 30%;
  margin: 10px;
  cursor: pointer;
`
const MealWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 10px 15px;
  display: flex;
  // flex-direction: column;
`
const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  height: 250px;
  background: gray;
  // margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
  font-size: 28px;
`
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  width: 50%;
`
const NameContainer = styled.div`
  height: 100%;
  width: 80%;
  background: #4CAF50;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  font-size:22px;
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

const MealItem = ({id, name, img, price, description}) => {
  return (
    <ListItem>
      <MealWrapper>
        <DescriptionContainer>
            <NameContainer>
              {name}
            </NameContainer>
            <PriceContainer>
              NT{price}
            </PriceContainer>
          </DescriptionContainer>
        <ImageContainer>
          {img}
        </ImageContainer>
      </MealWrapper>
    </ListItem>
  )
}
export default MealItem;