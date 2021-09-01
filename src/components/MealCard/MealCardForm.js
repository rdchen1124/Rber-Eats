import styled from "styled-components";
const MealFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const FormControl = styled.div``;
const SubmitButton = styled.button`
  width: 200px;
  background: black;
  color: white;
  border: none;
  border-radius: 3px;
  height: 30px;
`
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
  defaultValue: '1',
}
const MealCardForm = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <MealFormWrapper>
        <FormControl>
          <FormInput {...inputSetting} />
        </FormControl>
        <FormControl>
          <SubmitButton>新增至購物車</SubmitButton>
        </FormControl>
      </MealFormWrapper>
    </form>
  )
}
export default MealCardForm;