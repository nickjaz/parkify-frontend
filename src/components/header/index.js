import './_header.scss';
import React from 'react';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import Modal from '../modal';
import {logout} from '../../actions/auth-actions.js';
import Logo from '../../assets/parkify-car.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
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

  render() {
    return (
      <header className='header'>
        <button onClick={this.toggleNav}>=</button>
        <div id='header-title-container'>
          <Logo id='header-logo' />
          <h3 id='header-title'>Parkify</h3>
        </div>
        <nav onClick={this.toggleNav}>
          {this.state.navOpen ? <Modal showClose={false}><Navbar /></Modal> : undefined}
        </nav>
      </header>
    );
  }
}

let mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
