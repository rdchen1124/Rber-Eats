import { useState, useRef } from "react";
const useInput = (validityFunc) => {
  const [isTouched, setIsTouched] = useState(false);
  const [isValueValid , setIsValueValid] = useState(false);
  const inputRef = useRef("");
  const hasError = !isValueValid && isTouched;
  const handleInputBlur = () => {
    setIsTouched(true);
    setIsValueValid(validityFunc(inputRef.current.value));
  }
  const reset = () => {
    setIsTouched(false);
    setIsValueValid(false);
    inputRef.current.value = "";
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