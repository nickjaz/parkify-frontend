import './_header.scss';
import React from 'react';
import Modal from '../modal';
import Navbar from '../navbar';

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
    let nav = this.state.navOpen
      ? <Modal>
        <Navbar />
      </Modal>
      : undefined;

    return (
      <section className='header'>
        <button onClick={this.toggleNav}>V</button>
        <div className='logo'>Parkify</div>
        <div className='nav'>{nav}</div>
        <div className='signout'>Sign Out</div>
      </section>
    );
  }
}

export default Header;
