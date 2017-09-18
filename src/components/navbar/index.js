import './_navbar.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

import {tokenSet} from '../../actions/auth-actions.js';
import * as util from '../../lib/utilities.js';
import * as authActions from '../../actions/auth-actions.js';
import {profileFetchRequest} from '../../actions/profile-actions.js';

let NavLink = (props) => (
  <li className={util.classToggler({selected: props.url === `/${props.route}` })} >
    <Link to={`/${props.route}`}>
      {props.route}
    </Link>
  </li>
)

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.validateRoute = this.validateRoute.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount(){
    this.validateRoute(this.props);
  }

  validateRoute(props){
    let {match, history} = props;
    let token = util.readCookie('X-Parkify-Token');

    if(!token){
      return history.replace('/welcome/signup');
    }

    this.props.tokenSet(token);
    this.props.profileFetch();
    .catch(() => {
      console.log('PROFILE FETCH ERROR: user does not have a profile');
      if(!match.url.startsWith('/settings')){
        return history.replace('/settings');
      }
    })
  }

  handleLogout(){
    this.props.logout();
    this.props.history.push('/welcome/login');
  }

  render(){
    let {url} = this.props.match
    return (
      <nav>
        <ul>
          <NavLink route='nav link' url={url} />
          <NavLink route='nav link' url={url} />
          <NavLink route='nav link' url={url} />
          <NavLink route='nav link' url={url} />
        </ul>
      </nav>
    )}
    
    {util.renderIf(this.props.loggedIn,
    <button onClick={this.handleLogout}>logout</button>
  )}
}

let mapStateToProps = (state) => ({
  loggedIn: !!state.auth,
  profile: state.profile,
});

let mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout()),
  tokenSet: (token) => dispatch(tokenSet(token)),
  profileFetch: () => dispatch(profileFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
