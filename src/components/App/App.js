import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';
import Home from '../../pages/Home';
import UserCard from '../UserCard';
import Cart from '../Cart';
import { useSelector } from 'react-redux';
import { Transition } from "react-transition-group";
// import { store } from '../../redux/store';
const Root = styled.div`
  overflow: auto;
`

function App() {
  const isUserCardShowing = useSelector(store => store.user.isUserCardShowing)
  const isCartShowing = useSelector(store => store.cart.isCartShowing);
  return (
    <Root isTop={isUserCardShowing}>
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
    </Root>
  );
}

export default App;
