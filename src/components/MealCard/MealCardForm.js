import styled from "styled-components";
import { useState } from "react";
const MealFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const FormControl = styled.div``;
const SubmitButton = styled.button`
  width: 100%;
  background: black;
  color: white;
  border: none;
  border-radius: 3px;
  height: 30px;
  box-sizing: border-box;
  cursor: pointer;
`
const AddToCartButton = ({amount, price})=>{
  return (
    <SubmitButton>新增 {amount} 項商品至購物車 NT.{amount*price}</SubmitButton>
  )
}
const FormInput = styled.input`
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
`
const inputSetting = {
  id: 'amount',
  type: 'number',
  min: '1',
  max: '10',
  step: '1',
}
const ControlledInput = ({value, onChange, inputSetting})=>{
  return (
    <FormInput value={value} onChange={onChange} {...inputSetting} />
  )
}
const MealCardForm = ({price, onAddToCart}) => {
  const [amountInput, setAmountInput] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddToCart(Number(amountInput));
  }

  const handleAmountChange = (e) => {
    setAmountInput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <MealFormWrapper>
        <FormControl>
          <ControlledInput
            value={amountInput}
            onChange={handleAmountChange}
            inputSetting={inputSetting}
          />
        </FormControl>
        <FormControl>
          <AddToCartButton amount={amountInput} price={price} />
        </FormControl>
      </MealFormWrapper>
    </form>
  )
}
export default MealCardForm;