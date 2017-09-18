import './_header.scss';
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      navOpen: false
    };
  }

  toggleNav() {
    this.navOpen
    ? this.setState({navOpen: false})
    : this.setState({navOpen: true });
  }

  render() {
    return (
      <section className='header'>
        <button onClick={this.state.toggleNav}>Nav</button>
        {
          //Logo go here
        }
      </section>
    )
  }
}

export default Header;
