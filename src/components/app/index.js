import './_app.scss';
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import Search from '../search';

import LandingContainer from '../landing-container';
import {setToken} from '../../actions/auth-actions.js';
import {fetchProfileRequest} from '../../actions/profile-actions.js';

import Navbar from '../navbar';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='parkify'>
          <main>
            <Redirect from='/' to='/welcome/login' /> 
            <Route exact path='/search' component={Navbar} />
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
