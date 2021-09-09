import { useState, useRef } from "react";
const useInput = (validityFunc) => {
  const [isTouched, setIsTouched] = useState(false);
  const inputRef = useRef();
  const isValueValid = validityFunc(inputRef.current.value ? inputRef.current.value : false );
  const hasError = !isValueValid && isTouched;
  const handleInputBlur = () => {
    setIsTouched(true);
  }
  const reset = () => {
    inputRef.current.value = "";
    setIsTouched(false);
  }
  return {
    inputRef,
    isValid: isValueValid,
    hasError,
    handleInputBlur,
    reset
  }
}
export default useInput;