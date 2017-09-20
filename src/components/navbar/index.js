import './_navbar.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {setToken} from '../../actions/auth-actions.js';
import * as util from '../../lib/utilities.js';
import * as authActions from '../../actions/auth-actions.js';
import {fetchProfileRequest} from '../../actions/profile-actions.js';

import PropTypes from 'prop-types';

let NavLink = (props) => (
  <li className={util.classToggler({selected: props.url === `/${props.route}` })} >
    <Link to={`/${props.route}`}>
      {props.route}
    </Link>
  </li>
);

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push('/welcome/login');
  }

  render() {
    // let {url} = this.props.match;
    return (
      <nav>
        <ul>
          <NavLink route='nav link' />
          <NavLink route='nav link' />
          <NavLink route='nav link' />
          <NavLink route='nav link' />
        </ul>

        {util.renderIf(this.props.loggedIn,
          <button onClick={this.handleLogout}>logout</button>
        )}
      </nav>
    );
  }
}

Navbar.propTypes = {
  loggedIn: PropTypes.bool,
  logout: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.object,
  fetchProfile: PropTypes.func,
  setToken: PropTypes.func,
};

NavLink.propTypes = {
  url: PropTypes.string,
  route: PropTypes.string
};

let mapStateToProps = (state) => ({
  loggedIn: !!state.auth,
  profile: state.profile,
});

let mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout()),
  setToken: (token) => dispatch(setToken(token)),
  fetchProfile: () => dispatch(fetchProfileRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
