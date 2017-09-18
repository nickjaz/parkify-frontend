import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='parkify'>
          <Content>
          </Content>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;