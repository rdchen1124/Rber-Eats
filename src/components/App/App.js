import React, {useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { hideCart } from '../../redux/reducers/cartReducer';
import { setUser } from '../../redux/reducers/userReducer';
import { Transition } from "react-transition-group";
import Header from '../Header';
import Home from '../../pages/Home';
import Store from '../../pages/Store';
import Login from '../../pages/Login';
import Checkout from '../../pages/Checkout';
import UserCard from '../UserCard';
import Cart from '../Cart';
import { setAuthUser } from '../../utils';

const Root = styled.div`
  overflow: auto;
`
const RootContainer = (props) => {
  return <Root>{props.children}</Root>
}

function App() {
  const isUserCardShowing = useSelector(store => store.user.isUserCardShowing)
  const isCartShowing = useSelector(store => store.cart.isCartShowing);
  const user = useSelector(store => store.user.user);
  const [isScroll, setIsScroll] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    const onScroll = (e) => {
      setIsScroll(e.target.documentElement.scrollTop > 1);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[])
  useEffect(() => {
    if(isScroll){
      dispatch(hideCart());
    }
  }, [isScroll, dispatch]);
  const handleLogOut = () => {
    setAuthUser('');
    dispatch(setUser(''));
  }
  return (
    <RootContainer>
      <Router>
        <Header onLogOut={handleLogOut} />
        { isUserCardShowing && <UserCard />}
        <Transition mountOnEnter unmountOnExit timeout={200} in={isCartShowing}>
        {(state) => {
          let className = state;
          return <Cart className={className} />;
        }}
      </Transition>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/store/:id'>
            <Store />
          </Route>
          <Route path='/login'>
            {user ? <Redirect to='/' /> : <Login />}
          </Route>
          <Route exact path='/register'>
            <div>
              註冊
            </div>
          </Route>
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </RootContainer>
  );
}

export default App;
