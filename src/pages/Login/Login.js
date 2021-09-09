import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';
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
  // visibility: visible;
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
`
const isEMail = (value) => {
  const pattern = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
  return pattern.test(value);
}
const Login = () => {
  const [IsEMailError, setIsEMailError] = useState(false);
  const eMailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const eMail = eMailRef.current.value;
    const isEMailValid = isEMail(eMail);
    setIsEMailError(!isEMailValid);
    console.log('e-mail:', eMail);
    console.log('e-mail validility:', isEMailValid);
  }
  return <Root>
    <LoginForm onSubmit={handleSubmit}>
      <LoginFormTitle>很高興看到你，朋友</LoginFormTitle>
      <LoginFormInputWrapper>
        <LoginFormLabel htmlFor='name'>使用您的電子郵件登入</LoginFormLabel>
        <LoginFormInput ref={eMailRef} type='text' id='name' placeholder='請輸入電子郵件' />
        <LoginFormErrorLabel $show={IsEMailError}>電子郵件格式錯誤</LoginFormErrorLabel>
      </LoginFormInputWrapper>
      <LoginFormInputWrapper>
        <LoginFormLabel htmlFor='password'>請輸入密碼以登入</LoginFormLabel>
        <LoginFormInput 
          type='password'
          id='password'
          placeholder='請輸入 6-12 碼英數混合的密碼'
        />
        <LoginFormErrorLabel $show={IsEMailError}>密碼不能為空</LoginFormErrorLabel>
      </LoginFormInputWrapper>
      <LoginFormButtonWrapper>
        <LoginFormButton>登入</LoginFormButton>
      </LoginFormButtonWrapper>
    </LoginForm>
  </Root>
}
export default Login;