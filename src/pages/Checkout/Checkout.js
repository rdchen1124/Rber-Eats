import { useSelector } from "react-redux";
import styled from "styled-components";
import { CartItem } from "../../components/Cart";
const Root = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 100px;
`
const Container = styled.div`
  width: 540px;
  min-height: 360px;
  max-height: 720px;
  margin: 0 auto;
  padding: 30px 15px 0px;
  background: white;
  border: 1px solid black;
`
const StoreName = styled.div`
  font-size: 28px;
  font-weight: bold;
  padding: 0 20px;
  margin-bottom: 15px;
`
const OrderForm = styled.form`
  box-sizing: border-box;
  width: 540px;
  margin: 0 auto 30px;
  padding: 0 20px;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`
const OrderTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding: 0 20px;
  margin-bottom: 20px;
  color: #008CBA;
`
const OrderItemContainer = styled.div`
  box-sizing: border-box;
  width: 540px;
  margin: 0 auto 20px;
  padding: 0 20px;
  min-height: 150px;
  max-height: 220px;
  overflow-y: scroll;
`
const OrderFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 15px;
  }
`
const OrderFormInput = styled.input`
  height: 20px;
  font-size: 18px;
  padding: 5px 10px;
`
const OrderFormLabel = styled.label`
  color: grey;
  margin-bottom: 5px;
`
const OrderFormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`
const OrderFormButton = styled.button`
  height: 50px;
  font-size: 20px;
  background: lightseagreen;
  border: none;
  color: white;
  cursor: pointer;
`
const Checkout = () => {
  const items = useSelector(store => store.cart.items);
  const cartStore = useSelector(store => store.cart.cartStore);
  return <Root>
    <Container>
      <StoreName>{cartStore.name}</StoreName>
      {/* <hr /> */}
      <OrderTitle>您的餐點</OrderTitle>
      <OrderItemContainer>
        {items.map(item => 
          <CartItem
            key={item.id}
            id={item.id}
            amount={item.amount}
            name={item.name}
            price={item.price} 
          />
        )}
      </OrderItemContainer>
      <OrderTitle>您的資訊</OrderTitle>
      <OrderForm>
        <OrderFormInputWrapper>
          <OrderFormLabel htmlFor='name'>取餐者姓名:</OrderFormLabel>
          <OrderFormInput type='text' id='name' />
        </OrderFormInputWrapper>
        <OrderFormInputWrapper>
          <OrderFormLabel htmlFor='address'>外送地址:</OrderFormLabel>
          <OrderFormInput type='text' id='address' />
        </OrderFormInputWrapper>
        <OrderFormInputWrapper>
          <OrderFormLabel htmlFor='phone'>聯絡電話:</OrderFormLabel>
          <OrderFormInput type='text' id='phone' />
        </OrderFormInputWrapper>
        <OrderFormButtonWrapper>
          <OrderFormButton>送出訂單</OrderFormButton>
        </OrderFormButtonWrapper>
      </OrderForm>
    </Container>
  </Root>
}
export default Checkout;