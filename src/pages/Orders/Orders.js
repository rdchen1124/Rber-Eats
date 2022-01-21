import React, { useLayoutEffect, useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../WebApi";
import {OrdersRoot} from "../../components/Root";
const PageTitle = styled.div`
  font-size: 32px;
  font-width: bold;
  width: 1000px;
  padding: 10px;
  margin: 0 auto 20px;
  text-align: center;
`
const OrderWrapper = styled.div`
  padding: 10px 20px;
  width: 700px;
  background: white;
  & + & {
    margin-top: 30px;
  }
`
const TitleWrapper = styled.div`
  font-size: 24px;
  font-width: normal;
  padding: 5px 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StoreLink = styled(Link)`
  text-decoration: none;
  color: #008CBA;
`
const ContentWrapper = styled.div`
  margin-top: 20px;
  height: 150px;
  border: 1px solid rgba(0,0,0,0.2);
  overflow-y: scroll;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const OrderItemWrapper = styled.div`
  width: 400px;
  background: white;
  margin: 0 auto;
  height: 40px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const OrderItemInfo = styled.div`
  box-sizing: border-box;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const OrderItemAmount = styled(OrderItemInfo)`
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #00bffe;
`
const AmountWrapper = styled.div`
  font-size: 16px;
  font-width: normal;
  padding: 5px 10px;
  height: 40px;
  width: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`
const TitleContainer = styled.div`
  width: 50px;
`
const AmountContainer = styled.div`
  width: 150px;
  text-align: end;
  padding-right: 18px;
`
const LoadMoreButtonWrapper = styled.div`
  margin: 0 auto;
  width: 700px;
  text-align: center;
`
const LoadMoreButton = styled.button`
  height: 50px;
  font-size: 20px;
  background: #11CC17;
  color: white;
  border: none;
  cursor: pointer;
  margin-top: 30px;
  padding: 0 10px;
  &:hover {
    background: #4CAF50;
  }
`
const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 310px);
  width: 100%;
  font-weight: bold;
`
const OrderContainer = styled.div`
  flex-direction: column;
  font-weight: normal;
  height: ${props => props.$expand ? 'calc(100vh - 310px - 80px)':'auto'};
`
const Orders = () => {
  const [lastOrders, setLastOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const limit = 3;
  const user = useSelector(store => store.user.user);
  useLayoutEffect(()=>{
    getOrders(limit, currentPage).then(({res, headers}) => {
      if(currentPage === 1){
        const count = headers.get('X-Total-Count');
        setTotalPage(Math.ceil(count/limit));
      }
      res.then(data => {
        setLastOrders([...lastOrders, ...data]);
      })
    })
  }, [currentPage])
  const handleClick = (e) => {
    setCurrentPage(currentPage+1);
  }
  const emptyContent = (
    <EmptyContainer>您沒有任何訂單</EmptyContainer>  
  )
  const pageContent = ( 
    <Fragment>
      <PageTitle>過去的訂單</PageTitle>
      <OrderContainer $expand={lastOrders.length && lastOrders.length===1}>
        {lastOrders.map((lastOrder, index) => {
          return (
            <OrderWrapper key={index}>
              <TitleWrapper>
                <StoreLink to={`/store/${lastOrder.store.id}`}>
                  {lastOrder.store.name}
                </StoreLink>
              </TitleWrapper>
              <ContentWrapper>
                {lastOrder.order.map(item => {
                  return(
                    <OrderItemWrapper key={item.id}>
                      <OrderItemAmount>{item.amount}</OrderItemAmount>
                      <OrderItemInfo>{item.name}</OrderItemInfo>
                      <OrderItemInfo>NT.{item.price}</OrderItemInfo>
                    </OrderItemWrapper>
                  )
                })}
              </ContentWrapper>
              <AmountWrapper>
                <TitleContainer>總計:</TitleContainer>
                <AmountContainer>{"NT."}{lastOrder.totalAmount}</AmountContainer>
              </AmountWrapper>
            </OrderWrapper>
          )
        })}
        { currentPage < totalPage && <LoadMoreButtonWrapper>
            <LoadMoreButton onClick={handleClick}>Load More</LoadMoreButton>
          </LoadMoreButtonWrapper>
        }
      </OrderContainer>
    </Fragment>
  )
  return (
    <OrdersRoot>
      {lastOrders.length===0 && emptyContent}
      {lastOrders.length >= 1 && pageContent }
    </OrdersRoot>
  )
}
export default Orders;