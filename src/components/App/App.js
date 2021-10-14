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
import { cleanUser } from '../../redux/reducers/userReducer';
import { Transition } from "react-transition-group";
import Header from '../Header';
import Home from '../../pages/Home';
import Store from '../../pages/Store';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Checkout from '../../pages/Checkout';
import Orders from '../../pages/Orders';
import Favorites from '../../pages/Favorites';
import UserCard from '../UserCard';
import Cart from '../Cart';
import Footer from '../Footer';
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
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  },[])
  useEffect(() => {
    if(isScroll){
      dispatch(hideCart());
    }
  }, [isScroll, dispatch]);
  const handleLogOut = () => {
    setAuthUser('');
    dispatch(cleanUser());
  }
  return (
    <RootContainer>
      <Router>
        <Header onLogOut={handleLogOut} />
        { isUserCardShowing && <UserCard onLogOut={handleLogOut} />}
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
            {user.id !== 0 ? <Redirect to='/' /> : <Login />}
          </Route>
          <Route exact path='/register'>
            {user.id !== 0 ? <Register to='/' /> : <Register />}
          </Route>
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/orders'>
            {user.id === 0 ? <Redirect to='/' /> : <Orders />}
          </Route>
          <Route path='/favorites'>
            {user.id === 0 ? <Redirect to='/' /> : <Favorites />}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </RootContainer>
  );
}

export default App;
