import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducers/userReducer';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { setAuthUser } from '../../utils';
import { getUser } from '../../WebApi';
import InputField from '../../components/InputField/InputField';
const Root = styled.div`
  margin: 100px auto 0;
  width: 600px;
  height: calc(100vh - 210px);
  min-height: 600px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoginForm = styled.form`
  background: white;
  width: 500px;
  height: 500px;
  padding: 0 50px;
  border: none;
  border-radius: 15px;
  box-shadow: 3px 3px 10px;
`
const LoginFormTitle = styled.h3`
  font-size: 28px;
  font-weight: normal;
`
const LoginFormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 22px;
`
const LoginFormErrorLabel = styled.label`
  visibility : ${props => props.$show ? 'visible':'hidden'};
  color: #F44336;
`
const LoginFormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`
const RegisterLink = styled(Link)`
  height: 25px;
  text-decoration: none;
  color: green;
`
const RegisterLinkWrapper = styled.div`
  margin-bottom: 5px;
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
const isEmpty = (value) => value.trim() === "";
const Login = () => {
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(()=>{
    if(history.location.state && history.location.state.from){
    }else{
      let state = { ...history.location.state, from: '/' };
      history.replace({ ...history.location, state });
    }
  }, [history])
  useEffect(()=>{
    document.body.style.overflowY = 'hidden';
    return ()=>{
      document.body.style.overflowY = 'auto';
    }
  }, []);
  const nameRef = useRef("");
  const passwordRef = useRef("");
  const resetInputRefs = () => {
    nameRef.current.value = "";
    passwordRef.current.value = "";
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError("");
    if(isEmpty(nameRef.current.value) || isEmpty(passwordRef.current.value)){
      setLoginError("帳號或密碼不得為空");
      resetInputRefs();
      return;
    }
    getUser({
      name: nameRef.current.value,
      password: passwordRef.current.value
    }).then(res => {
      if(!res.length){
        setLoginError("帳號或密碼錯誤，請重新輸入");
        resetInputRefs();
      }else{
        const user = res[0];
        const formattedUser = {
          id: user.id,
          name: user.name,
          favorites: JSON.parse(user.favorites)
        }
        history.push(history.location.state.from);
        dispatch(setUser(formattedUser));
        setAuthUser(formattedUser);
      }
    })
  }
  const handleClickEnter = (e) => {
    e.key === 'Enter' && e.preventDefault();
  }
  const handleInputClick = () => {
    if(loginError !== ""){
      setLoginError("");
    }
  }
  return <Root>
    <LoginForm onKeyDown={handleClickEnter} onSubmit={handleSubmit}>
      <LoginFormTitle>很高興看到你，朋友</LoginFormTitle>
      <LoginFormInputWrapper>
        <InputField
          label='請輸入您的帳號'
          name='name'
          placeholder='請輸入使用者名稱'
          type='text'
          onClick={handleInputClick}
          ref={nameRef}
        />
      </LoginFormInputWrapper>
      <LoginFormInputWrapper>
        <InputField
          label='請輸入密碼以登入'
          name='password'
          placeholder='請輸入您的密碼'
          type='password'
          onClick={handleInputClick}
          ref={passwordRef}
        />
      </LoginFormInputWrapper>
      <LoginFormButtonWrapper>
        <RegisterLinkWrapper>
          <span>還沒有帳號嗎? </span><RegisterLink to='/register'>註冊</RegisterLink>
        </RegisterLinkWrapper>
        <LoginFormButton>登入</LoginFormButton>
        <LoginFormErrorLabel $show={loginError !== ""}>{loginError}</LoginFormErrorLabel>
      </LoginFormButtonWrapper>
    </LoginForm>
  </Root>
}
export default Login;