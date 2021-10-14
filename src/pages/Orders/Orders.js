import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getOrders } from "../../WebApi";
import Root from "../../components/Root";
const PageTitle = styled.div`
  font-size: 32px;
  font-width: bold;
  width: 1000px;
  padding: 10px;
  margin: 0 auto 20px;
  text-align: center;
`
const OrderWrapper = styled.div`
  margin: 0 auto;
  padding: 10px 20px 20px;
  width: 700px;
  min-width: 600px;
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`
const ContentWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const OrderItemWrapper = styled.div`
  width: 400px;
  background: white;
  margin: 0 auto;
  height: 50px;
  padding: 10px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & + & {
    margin-top: 10px;
  }
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
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Orders = () => {
  const [lastOrders, setLastOrders] = useState([]);
  const user = useSelector(store => store.user.user);
  useLayoutEffect(()=>{
    getOrders(user.name).then(res => {
      const processedOrders = res.map(order => {
        return {
          ...order,
          order: JSON.parse(order.order),
          store: JSON.parse(order.store),
          info: JSON.parse(order.info)
        }
      })
      setLastOrders(processedOrders)
    })
  }, [])
  useLayoutEffect(()=>{
    document.body.style.background = 'rgba(0, 0, 0, 0.2)';
    return ()=>{
      document.body.style.background = 'white';
    }
  }, []);
  return (
    <Root>
      <PageTitle>過去的訂單</PageTitle>
      {lastOrders.length===0 && <div>您沒有任何訂單</div>}
      {lastOrders.length > 0 && lastOrders.map((lastOrder, index) => {
        return (
          <OrderWrapper key={index}>
            <TitleWrapper>{lastOrder.store.name}</TitleWrapper>
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
          </OrderWrapper>
        )
      })}
    </Root>
  )
}
export default Orders;