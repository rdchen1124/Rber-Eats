import React, { useState } from "react"
import styled from "styled-components"
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleFavorites } from "../../../redux/reducers/userReducer"
import { FavoriteIcon } from "../../UI/Icons"
const ListItem = styled.li`
  position: relative;
  box-sizing: border-box;
  flex: 0 0 30%;
  margin: 10px 10px 20px;
  cursor: pointer;
`
const StoreLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
const StoreWrapper = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 20px 25px;
  display: flex;
  flex-direction: column;
  background: white;
  min-width: 250px;
  &:hover {
    border: 2px solid rgba(0, 0, 0, 1);
  }
`
const StoreImage = styled.img`
  width: 100%;
  height: 100%;
`
const StoreImageContainer = styled.div`
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  color: black;
  font-size:24px;
`
const ScoreContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
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
const StoreItem = ({id, img, name, score, location}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isHovered, setIsHovered] = useState(false);
  const user = useSelector(store => store.user.user);
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  const handleIconClick = (e) => {
    e.stopPropagation();
    if(user.id === 0) {
      history.push({
        pathname: '/login',
        state: { from: history.location.pathname }
      });
      return;
    }
    dispatch(toggleFavorites(id));
  }
  return (
    <ListItem>
      <FavoriteContainer 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleIconClick}>
        <FavoriteIcon
          fill={isHovered ? "#D0D0D0":"white"}
          type={user.favorites !== undefined && user.favorites.includes(id) ? "solid" : "hollow"}
          size="20"
          isHovered={isHovered}
        />
      </FavoriteContainer>
      <StoreLink to={`/store/${id}`}>
        <StoreWrapper>
          <StoreImageContainer>
            <StoreImage src={location} />
          </StoreImageContainer>
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