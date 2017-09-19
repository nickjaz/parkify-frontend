import './_landing-container.scss';
import React from 'react';
import {connect} from 'react-redux';
import AuthForm from '../auth-form';
import * as util from '../../lib/utilities.js';
import {signupRequest, loginRequest} from '../../actions/auth-actions.js';
import {fetchProfileRequest} from '../../actions/profile-actions.js';
import PropTypes from 'prop-types';
import Logo from '../../assets/logo.svg';

class LandingContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.auth && props.profile)
      props.history.replace('/search');
    if(props.auth && !props.profile)
      props.history.replace('/settings');
  }

  handleLogin(user) {
    let {fetchProfile, history} = this.props;
    return this.props.login(user)
    .then(() => fetchProfile())
    .then(() => history.push('/search'))
    .catch(util.logError);
  }

  handleSignup(user) {
    return this.props.signup(user)
    .then(() => {
      this.props.history.push('/settings');
    })
    .catch(util.logError);
  }

  render() {
    let {params} = this.props.match;

    let handleComplete = params.auth === 'login'
      ? this.handleLogin
      : this.handleSignup;

    return (
      <div className='landing-container'>
        <div id='title-container'>
          <Logo id='logo' />
          <h1 id='title'>Parkify</h1>
        </div>
        <AuthForm
          auth={params.auth}
          onComplete={handleComplete}
        />
      </div>
    );
  }
}

LandingContainer.propTypes = {
  auth: PropTypes.string,
  profile: PropTypes.object,
  history: PropTypes.object,
  fetchProfile: PropTypes.func,
  login: PropTypes.func,
  signup: PropTypes.func,
  match: PropTypes.object
};

let mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

let mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signupRequest(user)),
    login: (user) => dispatch(loginRequest(user)),
    fetchProfile: () => dispatch(fetchProfileRequest())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
