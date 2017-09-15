import './_header.scss';
import React from 'react';

import Navbar from '../navbar';

class Header extends React.Component {
  render() {
    return (
      <section className='header'>
        <Navbar />
        {
          //Logo go here
        }
      </section>
    )
  }
}

export default Header;
