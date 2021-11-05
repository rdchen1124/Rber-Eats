import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setAuthUser } from "../../utils";
import { updateFavorites } from "../../redux/reducers/userReducer";
import { FavoritesRoot } from "../../components/Root";
import { FavoritesStoresCard } from "../../components/UI";
import StoreItem from "../../components/Stores/StoreItem";
import STORE_IMAGES from "../../STORE_IMAGES";
const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 310px);
  width: 100%;
  font-weight: bold;
`
const ContentContainer = styled.div`
  min-height: calc(100vh - 410px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
`
const Favorites = () => {
  const dispatch = useDispatch();
  const user = useSelector(store => store.user.user);
  const stores = useSelector(store => store.store.stores);
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
    <FavoritesRoot>
      <section>
        {!user.favorites.length && emptyContent}
        {user.favorites.length > 0 && 
          <ContentContainer>
            <FavoritesStoresCard>
              {stores.filter(store => user.favorites.includes(store.store_id)).map(store => (
                <StoreItem
                  key={store.id}
                  id={store.store_id}
                  img={store.image}
                  name={store.name}
                  score={store.score}
                  location={STORE_IMAGES[store.image]}
                />
              ))}
            </FavoritesStoresCard>
          </ContentContainer>
        }
      </section>
    </FavoritesRoot>
  )
}
export default Favorites;