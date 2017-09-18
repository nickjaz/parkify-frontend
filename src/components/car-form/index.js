import React from 'react';
import * as util from '../../lib/utilities.js';

class CarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state {
      make: '';
      model: '';
      color: '';
      licensePlate: '';
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
  let {name, value,} = e.target;
  this.setState({
    [name]: value
  })
  }
}

handleSubmit(e) {
  e.preventDefault();
  this.props.handleSubmit(this.state);
}

render() {
  return (
    <form className='car-form'
      onSubmit={this.handleSubmit} />
      <input
        name='make'
        type='text'
        placeholder='Car Make'
        value={this.state.make}
        onChange={this.handleChange}
      />

      <input
        name='model'
        type='number'
        placeholder='Car Model'
        value={this.state.model}
        onChange={this.handleChange}
      />
      <input
        name='color'
        type='text'
        placeholder='Car Color'
        value={this.state.color}
        onChange={this.handleChange}
      />

      <input
        name='licensePlate'
        type='number'
        placeholder='License Number'
        value={this.state.licensePlate}
        onChange={this.handleChange}
      />
    </form>
  )
}
