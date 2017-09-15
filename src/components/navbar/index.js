import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <h1>Parkify!</h1>
        <nav>
          <ul>
            <li><Link to='/'>Login</Link></li>
            <li><Link to='/about'></Link></li>
            <li><Link to='/about'></Link></li>
            <li><Link to='/about'></Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar;
