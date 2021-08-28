import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
const ListItem = styled.li`
  margin-bottom: 20px;
  box-sizing: border-box;
  flex: 0 0 30%;
  margin: 10px;
  cursor: pointer;
`
const StoreLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const StoreWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
`
const ImageContainer = styled.div`
  position: relative;
  width: auto;
  height: 250px;
  background: gray;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: black;
  font-size:32px;
`
const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
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
const ScoreContainer = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #008CBA;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Heart = styled(ScoreContainer)`
  position: absolute;
  right: 5px;
  top: 5px;
  background: #f44336;
  color: white;
  font-size: 20px;
`
const StoreItem = ({id, img, name, score}) => {
  return (
    <ListItem>
      <StoreLink to={`/store/${id}`}>
        <StoreWrapper>
          <ImageContainer>
            <Heart>&lt;3</Heart>
            {img}
          </ImageContainer>
          <DescriptionContainer>
            <NameContainer>
              {name}
            </NameContainer>
            <ScoreContainer>
              {score}
            </ScoreContainer>
          </DescriptionContainer>
        </StoreWrapper>
      </StoreLink>
    </ListItem>
  )
}
export default StoreItem;