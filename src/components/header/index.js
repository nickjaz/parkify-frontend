import './_header.scss';
import React from 'react';
import Modal from '../modal';
import Navbar from '../navbar';
import {connect} from 'react-redux';

import {logout} from '../../actions/auth-actions.js';

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
    console.log('log out click');
  }

  render() {
    let nav = this.state.navOpen
      ? <Modal>
        <Navbar />
      </Modal>
      : undefined;

    return (
      <header className='header'>
        <button onClick={this.toggleNav}>V</button>
        <div className='logo'>Parkify</div>
        <div className='nav'>{nav}</div>
        <div className='logout' onClick={this.handleLogout}>Log Out</div>
      </header>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
