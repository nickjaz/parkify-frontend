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

import SettingsContainer from '../settings-container';

import Navbar from '../navbar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.validateRoute = this.validateRoute.bind(this);
  }

  componentDidMount(){
    this.validateRoute(this.props);
  }

  validateRoute(props){
    let {match, history} = props;
    let token = util.readCookie('X-Parkify-Token');

    if (!token){
      return;
    }

    this.props.setToken(token);
    this.props.fetchProfile()
    .then(() => history.replace('/search'))
    .catch(() => {
      console.log('PROFILE FETCH ERROR: user does not have a userProfile');

      if(!match.url.startsWith('/settings')) {
        history.replace('/settings');
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className='parkify'>
          <main>
            <Route exact path='*' component={Navbar} />
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
