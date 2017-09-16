import React from 'react';
import * as util from '../../lib/util.js';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      password: '',
      email: '',
      nameError: null,
      passwordError: null,
      emailError: null,
      error: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;

    this.setState({
      [name]: value,
      nameError: name === 'name' && !value ? 'username required' : null,
      passwordError: name === 'password' && !value ? 'password required' : null,
      emailError: name === 'email' && !value ? 'email required' : null
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state)
      .then(() => {
        this.setState({ name: '', password: '', email: '' });
      })
      .catch( error => {
        console.error(error);
        this.setState({error});
      });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className='auth-form'>

        {util.renderIf(this.props.auth === 'signup',
          <input
            type='text'
            name='email'
            placeholder='enter your email'
            value={this.state.email}
            onChange={this.handleChange}
          />
        )}

        <input
          type='text'
          name='name'
          placeholder='enter username'
          value={this.state.name}
          onChange={this.handleChange}
        />

        <input
          type='password'
          name='password'
          placeholder='enter password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <button type='submit'>{this.props.auth}</button>
      </form>
    );
  }
}

export default UserForm;
