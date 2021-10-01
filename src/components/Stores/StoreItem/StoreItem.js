import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FavoriteIcon } from "../../UI/Icons"
const ListItem = styled.li`
  position: relative;
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
const FavoriteContainer = styled.div`
  position: absolute;
  right: 30px;
  top: 25px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StoreItem = ({id, img, name, score}) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  const handleIconClick = (e) => {
    e.stopPropagation();
    console.log('Icon is clicked!!');
  }
  return (
    <ListItem>
      <FavoriteContainer 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleIconClick}>
        <FavoriteIcon
          fill={isHovered ? "#D0D0D0":"white"}
          type="hollow"
          size="20"
          isHovered={isHovered}
        />
      </FavoriteContainer>
      <StoreLink to={`/store/${id}`}>
        <StoreWrapper>
          <ImageContainer>
            {img}
          </ImageContainer>
          <DescriptionContainer>
            <NameContainer>
              {name}
            </NameContainer>
            <ScoreContainer>
              {score.toFixed(1)}
            </ScoreContainer>
          </DescriptionContainer>
        </StoreWrapper>
      </StoreLink>
    </ListItem>
  )
}
export default StoreItem;