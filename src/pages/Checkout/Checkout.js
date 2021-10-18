import { useEffect, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { CartItem } from "../../components/Cart";
import useInput from "../../hooks/useInput";
import { addOrder, setIsSubmitted, setSubmitError } from "../../redux/reducers/cartReducer"
import { setCart } from "../../utils";
const Root = styled.div`
  width: 90%;
  margin: 150px auto 50px;
  position: relative;
  height: calc(710px + 30px);
  padding: 5px;
`
const Container = styled.div`
  position: absolute;
  width: 540px;
  max-height: 710px;
  top: 20px;
  left: calc(50% - 270px);
  margin: 0 auto;
  padding: 10px 15px;
  background: white;
  border: none;
  border-radius: 15px;
  box-shadow: 3px 3px 10px;
`
const WarnningContainer = styled.div`
  position: absolute;
  width: 540px;
  height: 360px;
  top: calc(50% - 180px);
  left: calc(50% - 270px);
  margin: 0 auto;
  padding: 10px 15px;
  background: white;
  border: none;
  border-radius: 15px;
  box-shadow: 5px 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: grey;
  font-size: 22px;
  font-weight: bold;
`
const Title = styled.div`
  padding: 0 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`
const StoreName = styled.div`
  font-size: 28px;
  font-weight: bold;
`
const StoreLink = styled(Link)`
  text-decoration: none;
  color: black;
  border: none;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`
const LinkButton = styled.div`
  color: white;
  background: black;
  padding: 5px 0;
  width: 150px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  & + & {
    margin-top: 10px;
  }
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
  margin-bottom: 10px;
  color: #008CBA;
`
const OrderItemContainer = styled.div`
  box-sizing: border-box;
  width: 520px;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 150px;
  max-height: 160px;
  overflow-y: scroll;
  border: 1px solid rgba(0, 0, 0, 0.1);
`
const TotalAmountWrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 45px;
`;
const TotalAmountTitle = styled.div`
  height: 30px;
  font-size: 20px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TotalAmount = styled(TotalAmountTitle)`
  font-weight: bold;
`
const OrderFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
const OrderFormErrorLabel = styled.label`
  visibility : ${props => props.$show ? 'visible':'hidden'};
  color: #F44336;
  margin-bottom: 5px;
`
const OrderFormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
const OrderFormButton = styled.button`
  height: 50px;
  font-size: 20px;
  background: ${props => props.disabled ? 'grey':'lightseagreen'};
  border: none;
  color: white;
  cursor: ${props => props.disabled ? 'not-allowed':'pointer'};
`
const Checkout = () => {
  const items = useSelector(store => store.cart.items);
  const cartStore = useSelector(store => store.cart.cartStore);
  const totalAmount = useSelector(store => store.cart.totalAmount);
  const user = useSelector(store => store.user.user);
  const isSubmitted = useSelector(store => store.cart.isSubmitted);
  const isSubmitting = useSelector(store => store.cart.isSubmitting);
  const dispatch = useDispatch();
  const history = useHistory();
  const isEmpty = (value) => value.trim() !== '';
  const {
    inputRef: nameRef,
    isValid: isNameValid,
    hasError: nameHasError,
    handleInputBlur: handleNameBlur,
    reset: resetName
  } = useInput(isEmpty);

  const {
    inputRef: addressRef,
    isValid: isAddressValid,
    hasError: addressHasError,
    handleInputBlur: handleAddressBlur,
    reset: resetAddress
  } = useInput(isEmpty);

  const {
    inputRef: phoneRef,
    isValid: isPhoneValid,
    hasError: phoneHasError,
    handleInputBlur: handlePhoneBlur,
    reset: resetPhone
  } = useInput(isEmpty);

  const isValid = isNameValid && isAddressValid && isPhoneValid;
  const handleSubmitOrder = (e) => {
    e.preventDefault();
    dispatch(setSubmitError(''));
    if(!isValid){
      return;
    }
    dispatch(addOrder({
      user: user.name,
      order: items,
      info: {
        name: nameRef.current.value,
        address: addressRef.current.value,
        phone: phoneRef.current.value
      },
      store: {
        id: cartStore.id,
        name: cartStore.name
      }
    }))
    resetName();
    resetAddress();
    resetPhone();
  }
  const handleClickEnter = (e) => {
    e.key === 'Enter' && e.preventDefault();
  }
  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack();
  }
  const handleGoHome = (e) => {
    e.preventDefault();
    history.push('/');
  }
  useEffect(()=>{
    return ()=>{
      if(isSubmitted){
        dispatch(setIsSubmitted(false));
      }
    }
  }, [dispatch, isSubmitted])
  useEffect(()=>{
    const cart = {
      items,
      cartStore
    }
    setCart(cart);
  }, [items, cartStore]);
  const orderContent = (
    <Container>
      <Title>
        <StoreName>{cartStore.name}</StoreName>
        <StoreLink to={`/store/${cartStore.id}`} target="_top">新增餐點</StoreLink>
      </Title>
      <OrderTitle>您的餐點</OrderTitle>
      <OrderItemContainer>
        {items.map(item => 
          <CartItem
            key={item.id}
            id={item.id}
            mealId={item.mealId}
            amount={item.amount}
            name={item.name}
            price={item.price} 
          />
        )}
      </OrderItemContainer>
      <TotalAmountWrapper>
        <TotalAmountTitle>總計:</TotalAmountTitle>
        <TotalAmount>${totalAmount}</TotalAmount>
      </TotalAmountWrapper>
      <hr />
      <OrderTitle>您的資訊</OrderTitle>
      <OrderForm onKeyDown={handleClickEnter} onSubmit={handleSubmitOrder}>
        <OrderFormInputWrapper>
          <OrderFormLabel htmlFor='name'>取餐者姓名:</OrderFormLabel>
          <OrderFormInput 
            type='text'
            id='name'
            placeholder='請輸入姓名'
            ref={nameRef}
            onBlur={handleNameBlur}
          />
          <OrderFormErrorLabel $show={nameHasError}>姓名不得為空</OrderFormErrorLabel>
        </OrderFormInputWrapper>
        <OrderFormInputWrapper>
          <OrderFormLabel htmlFor='address'>外送地址:</OrderFormLabel>
          <OrderFormInput
            type='text'
            id='address'
            placeholder='請輸入地址'
            ref={addressRef}
            onBlur={handleAddressBlur}
          />
          <OrderFormErrorLabel $show={addressHasError}>地址不得為空</OrderFormErrorLabel>
        </OrderFormInputWrapper>
        <OrderFormInputWrapper>
          <OrderFormLabel htmlFor='phone'>聯絡電話:</OrderFormLabel>
          <OrderFormInput
            type='text'
            id='phone'
            placeholder='請輸入連絡電話'
            ref={phoneRef}
            onBlur={handlePhoneBlur}
          />
          <OrderFormErrorLabel $show={phoneHasError}>請填妥電話</OrderFormErrorLabel>
        </OrderFormInputWrapper>
        <OrderFormButtonWrapper>
          <OrderFormButton disabled={!isValid}>送出訂單</OrderFormButton>
        </OrderFormButtonWrapper>
      </OrderForm>
    </Container>
  )
  const emptyCartContent = (
    <WarnningContainer>
      <div>您的購物車沒有物品</div>
      <LinkButton onClick={handleGoBack}>回前頁</LinkButton>
      <LinkButton onClick={handleGoHome}>回首頁</LinkButton>
    </WarnningContainer>
  )
  const submittingContent = (
    <WarnningContainer>Your order now submitting.</WarnningContainer>
  )
  const submittedContent = (
    <WarnningContainer>
      <div>您的訂單已送出</div>
      <LinkButton onClick={handleGoHome}>回首頁</LinkButton>
    </WarnningContainer>
  )
  return (<Root>
    {!isSubmitted && items.length!==0 && !isSubmitting && orderContent}
    {!isSubmitted && !items.length && !isSubmitting && emptyCartContent}
    {isSubmitting && submittingContent}
    {isSubmitted && !isSubmitting && submittedContent}
  </Root>)
}
export default Checkout;