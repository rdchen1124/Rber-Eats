import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducers/userReducer';
import { useHistory } from 'react-router';
import useInput from '../../hooks/useInput';
import { setAuthUser } from '../../utils';
const Root = styled.div`
  margin: 100px auto 0;
  height: 600px;
  box-sizing: border-box;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LoginForm = styled.form`
  background: white;
  width: 400px;
  height: 400px;
`
const LoginFormTitle = styled.h3`
  font-size: 28px;
  font-weight: normal;
`
const LoginFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 15px;
  }
`
const LoginFormInput = styled.input`
  height: 40px;
  font-size: 18px;
  padding: 5px 10px;
`
const LoginFormLabel = styled.label`
  color: grey;
  margin-bottom: 5px;
`
const LoginFormErrorLabel = styled.label`
  visibility : ${props => props.$show ? 'visible':'hidden'};
  color: #F44336;
`
const LoginFormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`
const LoginFormButton = styled.button`
  height: 50px;
  font-size: 20px;
  background: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background: #11CC17;
  }
`
const isEMail = (value) => {
  const pattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
  return pattern.test(value);
}
const isEmpty = (value) => value.trim() !== "";
const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(()=>{
    if(history.location.state && history.location.state.from){
    }else{
      let state = { ...history.location.state, from: '/' };
      history.replace({ ...history.location, state });
    }
  }, [history])
  const {
    inputRef: emailRef,
    isValid: isEmailValid,
    hasError: emailHasError,
    handleInputBlur: handleEmailBlur,
    reset: resetEmail
  } = useInput(isEMail);
  const {
    inputRef: passwordRef,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    handleInputBlur: handlePasswordBlur,
    reset: resetPassword
  } = useInput(isEmpty);
  let isFormValid = false;
  isFormValid = isEmailValid && isPasswordValid;
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isEmailValid){
      return;
    }
    resetEmail();
    resetPassword();
    dispatch(setUser('Ryan'));
    setAuthUser('Ryan');
    history.push(history.location.state.from);
  }
  const handleClickEnter = (e) => {
    e.key === 'Enter' && e.preventDefault();
  }
  return <Root>
    <LoginForm onKeyDown={handleClickEnter} onSubmit={handleSubmit}>
      <LoginFormTitle>很高興看到你，朋友</LoginFormTitle>
      <LoginFormInputWrapper>
        <LoginFormLabel htmlFor='name'>使用您的電子郵件登入</LoginFormLabel>
        <LoginFormInput
          ref={emailRef}
          type='text'
          id='name'
          onBlur={handleEmailBlur}
          placeholder='請輸入電子郵件'
        />
        <LoginFormErrorLabel $show={emailHasError}>電子郵件格式錯誤</LoginFormErrorLabel>
      </LoginFormInputWrapper>
      <LoginFormInputWrapper>
        <LoginFormLabel htmlFor='password'>請輸入密碼以登入</LoginFormLabel>
        <LoginFormInput
          ref={passwordRef}
          type='password'
          id='password'
          onBlur={handlePasswordBlur}
          placeholder='請輸入 6-12 碼英數混合的密碼'
        />
        <LoginFormErrorLabel $show={passwordHasError}>密碼不能為空</LoginFormErrorLabel>
      </LoginFormInputWrapper>
      <LoginFormButtonWrapper>
        <LoginFormButton disabled={!isFormValid}>登入</LoginFormButton>
      </LoginFormButtonWrapper>
    </LoginForm>
  </Root>
}
export default Login;