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
import { useSelector } from 'react-redux';
const Root = styled.div`
  overflow: auto;
`

function App() {
  const isUserCardShowing = useSelector(store => store.user.isUserCardShowing)
  return (
    <Root isTop={isUserCardShowing}>
      <Router>
        <Header />
        { isUserCardShowing && <UserCard />}
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
