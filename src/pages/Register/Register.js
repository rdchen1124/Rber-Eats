import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/reducers/userReducer';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { setAuthUser, setUserToken } from '../../utils';
import { addUser } from '../../WebApi';
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
const RegisterForm = styled.form`
  background: white;
  width: 500px;
  height: 450px;
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
  margin-bottom: 22px;
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
const isEmpty = (value) => value.trim() === "";
const Register = () => {
  const [registerError, setRegisterError] = useState("");
  useEffect(()=>{
    document.body.style.overflowY = 'hidden';
    return ()=>{
      document.body.style.overflowY = 'auto';
    }
  }, []);
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const resetInputRefs = () => {
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  }
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    setRegisterError("");
    if(isEmpty(usernameRef.current.value) || isEmpty(passwordRef.current.value)){
      setRegisterError("???????????????????????????");
      resetInputRefs();
      return;
    }
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    addUser({
      username: username,
      password: password,
      favorites: []
    }).then(res => {
      if(!res.ok){
        setRegisterError(res.message);
        resetInputRefs();
      }else{
        // get token, user from respond.
        const {token, user} = res;
        setAuthUser(user);
        setUserToken(token);
        dispatch(setUser(user));
        history.push('/');
      }
    }).catch(err => {
      setRegisterError("Error:", err.toString());
      resetInputRefs();
    })
  }
  const handleClickEnter = (e) => {
    e.key === 'Enter' && e.preventDefault();
  }
  const handleInputClick = () => {
    if(registerError !== ""){
      setRegisterError("");
    }
  }
  return <Root>
    <RegisterForm onKeyDown={handleClickEnter} onSubmit={handleSubmit}>
      <RegisterFormTitle>?????????????????????????????????</RegisterFormTitle>
      <RegisterFormInputWrapper>
        <InputField
          label='???????????????????????????'
          name='username'
          placeholder='????????????????????????'
          type='text'
          onClick={handleInputClick}
          ref={usernameRef}
        />
      </RegisterFormInputWrapper>
      <RegisterFormInputWrapper>
        <InputField
          label='???????????????????????????'
          name='password'
          placeholder='???????????????'
          type='password'
          onClick={handleInputClick}
          ref={passwordRef}
        />
      </RegisterFormInputWrapper>
      <RegisterFormButtonWrapper>
        <LoginLinkWrapper><span>?????????????????????? </span><LoginLink to='/login'>??????</LoginLink></LoginLinkWrapper>
        <RegisterFormButton>??????</RegisterFormButton>
        <RegisterFormErrorLabel $show={registerError !== ""}>{registerError}</RegisterFormErrorLabel>
      </RegisterFormButtonWrapper>
    </RegisterForm>
  </Root>
}
export default Register;