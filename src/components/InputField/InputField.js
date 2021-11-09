import { forwardRef, Fragment } from "react";
import styled from "styled-components";
const InputLabel = styled.label`
  color: grey;
  margin-bottom: 5px;
`
const Input = styled.input`
  height: 40px;
  font-size: 18px;
  padding: 5px 10px;
`
const InputField = forwardRef(({ label, name, placeholder, type, onClick }, ref) => (
  <Fragment>
    { label && <InputLabel htmlFor={name}>{label}</InputLabel> }
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      ref={ref}
      id={name}
      onClick={onClick}
    />
  </Fragment>
));
export default InputField;