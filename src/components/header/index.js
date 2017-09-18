import './_header.scss';
import React from 'react';
import Modal from '../modal';
//import Navbar from '../navbar';

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
    let nav;
    if(this.state.navOpen) {
      nav =
        <Modal>
          <ul>
            <li>Home</li>
            <li>User</li>
            <li>Other</li>
          </ul>
        </Modal>
    } else {
      nav = undefined;
    }
    return (
      <section className='header'>
        <button onClick={this.toggleNav}>Nav</button>
        <div className='logo'>Logo</div>
        <div className='nav'>{nav}</div>
      </section>
    )
  }
}

export default Header;
