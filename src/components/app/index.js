import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from '../navbar';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='parkify'>
          <Route exact path='*' component={Navbar} />

            <Content>
            </Content>
            <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
