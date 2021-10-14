import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setAuthUser } from "../../utils";
import { updateFavorites } from "../../redux/reducers/userReducer";
import Root from "../../components/Root";
import { FavoritesStoresCard } from "../../components/UI";
import DUMMY_STORES from '../../DUMMY_STORES';
import StoreItem from "../../components/Stores/StoreItem";
const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 380px);
  width: 100%;
  font-weight: bold;
`
const ContentContainer = styled.div`
  min-height: calc(100vh - 380px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 50px 0;
`
const Favorites = () => {
  const dispatch = useDispatch();
  const StoreList = DUMMY_STORES;
  const user = useSelector(store => store.user.user);
  useEffect(()=>{
    setAuthUser(user);
    if(user.id !== 0){
      dispatch(updateFavorites({userId: user.id, favorites: user.favorites}))
    }
  }, [user]);
  useEffect(()=>{
    if(user.favorites.length <= 3){document.body.style.overflow = "hidden";
    return ()=>{
      document.body.style.overflow = "auto";
    }}
  }, [user.favorites])
  const emptyContent = (<EmptyContainer>it's empty of your favorites store.</EmptyContainer>)
  return (
    <Root>
      <section>
        {!user.favorites.length && emptyContent}
        {user.favorites.length > 0 && 
          <ContentContainer>
            <FavoritesStoresCard>
              {StoreList.filter(store => user.favorites.includes(store.id)).map(store => (
                <StoreItem
                  key={store.id}
                  id={store.id}
                  img={store.image}
                  name={store.name}
                  score={store.score}
                />
              ))}
            </FavoritesStoresCard>
          </ContentContainer>
        }
      </section>
    </Root>
  )
}
export default Favorites;