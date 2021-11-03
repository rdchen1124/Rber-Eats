import { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducers/userReducer';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { setAuthUser } from '../../utils';
import { addUser } from '../../WebApi';
const Root = styled.div`
  margin: 100px auto 0;
  width: 600px;
  height: calc(100vh - 210px);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const RegisterForm = styled.form`
  background: white;
  width: 500px;
  height: 500px;
  padding: 0 50px;
  border: none;
  border-radius: 15px;
  box-shadow: 3px 3px 10px;
`
const RegisterFormTitle = styled.h3`
  font-size: 28px;
  font-weight: normal;
`
const RegisterFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 15px;
  }
`
const RegisterFormInput = styled.input`
  height: 40px;
  font-size: 18px;
  padding: 5px 10px;
`
const RegisterFormLabel = styled.label`
  color: grey;
  margin-bottom: 5px;
`
const RegisterFormErrorLabel = styled.label`
  visibility : ${props => props.$show ? 'visible':'hidden'};
  color: #F44336;
`
const RegisterFormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
const LoginLink = styled(Link)`
  height: 25px;
  text-decoration: none;
  color: green;
`
const LoginLinkWrapper = styled.div`
  margin-bottom: 5px;
`
const RegisterFormButton = styled.button`
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
const isEmpty = (value) => value.trim() !== "";
const Register = () => {
  useEffect(()=>{
    document.body.style.overflowY = 'hidden';
    return ()=>{
      document.body.style.overflowY = 'auto';
    }
  }, []);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    inputRef: nameRef,
    isValid: isNameValid,
    hasError: nameHasError,
    handleInputBlur: handleNameBlur,
    reset: resetName
  } = useInput(isEmpty);
  const {
    inputRef: passwordRef,
    isValid: isPasswordValid,
    hasError: passwordHasError,
    handleInputBlur: handlePasswordBlur,
    reset: resetPassword
  } = useInput(isEmpty);
  let isFormValid = false;
  isFormValid = isNameValid && isPasswordValid;
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isNameValid){
      return;
    }

		addUser({
			name: nameRef.current.value,
			password: passwordRef.current.value,
			favorites: []
		}).then(res => {
			if(res.ok === 0){
				console.log(res.message);
			}else{
				setAuthUser(nameRef.current.value);
        dispatch(setUser(nameRef.current.value));
				resetName();
				resetPassword();
				history.push('/');
			}
		})
  }
  const handleClickEnter = (e) => {
    e.key === 'Enter' && e.preventDefault();
  }
  return <Root>
    <RegisterForm onKeyDown={handleClickEnter} onSubmit={handleSubmit}>
      <RegisterFormTitle>歡迎您註冊本服務，朋友</RegisterFormTitle>
      <RegisterFormInputWrapper>
        <RegisterFormLabel htmlFor='name'>挑選一個使用者名稱</RegisterFormLabel>
        <RegisterFormInput
          ref={nameRef}
          type='text'
          id='name'
          onBlur={handleNameBlur}
          placeholder='請輸入使用者名稱'
        />
        <RegisterFormErrorLabel $show={nameHasError}>使用者名稱不能為空</RegisterFormErrorLabel>
      </RegisterFormInputWrapper>
      <RegisterFormInputWrapper>
        <RegisterFormLabel htmlFor='password'>挑選一個適當的密碼</RegisterFormLabel>
        <RegisterFormInput
          ref={passwordRef}
          type='password'
          id='password'
          onBlur={handlePasswordBlur}
          placeholder='請輸入密碼'
        />
        <RegisterFormErrorLabel $show={passwordHasError}>密碼不能為空</RegisterFormErrorLabel>
      </RegisterFormInputWrapper>
      <RegisterFormButtonWrapper>
        <LoginLinkWrapper><span>已註冊的使用者? </span><LoginLink to='/login'>登入</LoginLink></LoginLinkWrapper>
        <RegisterFormButton disabled={!isFormValid}>註冊</RegisterFormButton>
      </RegisterFormButtonWrapper>
    </RegisterForm>
  </Root>
}
export default Register;