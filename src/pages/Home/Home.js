import React, { Fragment } from 'react';
import { HomeRoot } from '../../components/Root';
import Stores from '../../components/Stores';

const Home = () => {
  return (
    <Fragment>
      <HomeRoot>
        <main>
          <Stores />
        </main>
      </HomeRoot>
    </Fragment>
  )
}
export default Home;