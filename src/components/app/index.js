import './_app.scss';
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from '../search';
import SettingsContainer from '../settings-container';
import LandingContainer from '../landing-container';
import {setToken} from '../../actions/auth-actions.js';
import {fetchProfileRequest} from '../../actions/profile-actions.js';
import * as util from '../../lib/utilities.js';
import Header from '../header';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className='parkify'>
          <main>
            <Route exact path='*' component={Header} />
            <Redirect from='/' to='/welcome/login' />
            <Route exact path='/welcome/:auth' component={LandingContainer} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/settings' component={SettingsContainer} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

let mapStateToProps = (state) => ({
  token: state.auth,
  profile: state.profile
});

let mapDispatchToProps = (dispatch) => ({
  setToken: (token) => dispatch(setToken(token)),
  fetchProfile: () => dispatch(fetchProfileRequest())
});

App.propTypes = {
  profile: PropTypes.object,
  token: PropTypes.string,
  setToken: PropTypes.func,
  fetchProfile: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
