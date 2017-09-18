import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Search from '../search';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='parkify'>
          <main>
            <Route exact path='/search' component={Search} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;