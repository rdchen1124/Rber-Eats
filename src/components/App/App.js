import React, {useState, useEffect} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { hideCart } from '../../redux/reducers/cartReducer';
import { Transition } from "react-transition-group";
import Header from '../Header';
import Home from '../../pages/Home';
import UserCard from '../UserCard';
import Cart from '../Cart';

const Root = styled.div`
  overflow: auto;
`
const RootContainer = (props) => {
  return <Root>{props.children}</Root>
}

function App() {
  const isUserCardShowing = useSelector(store => store.user.isUserCardShowing)
  const isCartShowing = useSelector(store => store.cart.isCartShowing);
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
  return (
    <RootContainer>
      <Router>
        <Header />
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
          <Route exact path='/store/:id'>
            <div>
              餐廳頁面
            </div>
          </Route>
          <Route exact path='/login'>
            <div>
              登入
            </div>
          </Route>
          <Route exact path='/register'>
            <div>
              註冊
            </div>
          </Route>
        </Switch>
      </Router>
    </RootContainer>
  );
}

export default App;
