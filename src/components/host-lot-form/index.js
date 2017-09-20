import React from 'react';
import PropTypes from 'prop-types';

class HostLotForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.lot ? props.lot.name : '',
      description: props.lot ? props.lot.description: '',
      address: props.lot ? props.lot.address: '',
      price: props.lot ? props.lot.price: 0,
      startTime: props.lot ? props.lot.startTime: '',
      endTime: props.lot ? props.lot.endTime: ''
    };

    this.handleHostLotFormChange = this.handleHostLotFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHostLotFormChange(e) {
    let {name, description, address, price, startTime, endtime, value} = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('state:', this.state);
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <form className='host-lot-form'
        onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='name'
          value={this.state.name}
          onChange={this.handleHostLotFormChange}
        />

        <input
          name='description'
          type='text'
          placeholder='description'
          value={this.state.description}
          onChange={this.handleHostLotFormChange}
        />

        <input
          name='address'
          type='text'
          placeholder='address'
          value={this.state.address}
          onChange={this.handleHostLotFormChange}
        />

        <input
          name='price'
          type='text'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleHostLotFormChange}
        />

        <input
          name='endTime'
          type='text'
          placeholder='endTime'
          value={this.state.endTime}
          onChange={this.handleHostLotFormChange}
        />

        <input
          name='startTime'
          type='text'
          placeholder='startTime'
          value={this.state.startTime}
          onChange={this.handleHostLotFormChange}
        />

        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

HostLotForm.propTypes = {
  name: PropTypes.string,
  description:PropTypes.string,
  address: PropTypes.string,
  price: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
};


export default HostLotForm;