import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Search from '../search';

import LandingContainer from '../landing-continer';
import {setToken} from '../../action/auth-actions.js';
import {fetchProfileRequest} from '../../actions/profile-actions.js';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='parkify'>
          <main>
            <Route exact path='/welcome/:auth' component={LandingContainer} />
            <Route exact path='/search' component={Search} />
          </main>

        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
});

let mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
  fetchProfile: () => dispatch(fetchProfileRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
