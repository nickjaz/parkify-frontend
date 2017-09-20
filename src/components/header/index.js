import './_header.scss';
import React from 'react';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import Modal from '../modal';
import {logout} from '../../actions/auth-actions.js';
import PropTypes from 'prop-types';
import Logo from '../../assets/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      navOpen: false
    };
  }

  toggleNav() {
    let navState = !this.state.navOpen;
    this.setState({
      navOpen: navState
    });
  }

  handleLogout() {
    this.props.logout();
    this.props.history.push('/welcome/login');
  }

  render() {
    return (
      <header className='header'>
        <button onClick={this.toggleNav}>V</button>
        <div id='header-title-container'>
          <Logo id='header-logo' />
          <h3 id='header-title'>Parkify</h3>
        </div>
        {this.state.navOpen ? <Modal showClose={false}><Navbar /></Modal> : undefined}
        {
          //<div className='logout' onClick={this.handleLogout}>Log Out</div>
        }
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.object,
  logout: PropTypes.func
};

let mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
