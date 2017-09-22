import './_app.scss';
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from '../search';
import SettingsContainer from '../settings-container';
import LandingContainer from '../landing-container';
import ReservationContainer from '../reservation-container';
import {setToken} from '../../actions/auth-actions.js';
import {fetchProfileRequest} from '../../actions/profile-actions.js';
import Header from '../header';

import HostContainer from '../host-container';

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
            <Route exact path='/' render={() => <Redirect from='/' to='/welcome/login' />} />
            <Route path='/welcome/:auth' component={LandingContainer} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/settings' component={SettingsContainer} />
            <Route exact path='/addalot' component={HostContainer} />
            <Route exact path='/reservation' component={ReservationContainer} />
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
