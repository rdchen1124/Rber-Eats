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
const Root = styled.div``
function App() {
  return (
    <Root>
      <Router>
        <Header />
        <UserCard />
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
