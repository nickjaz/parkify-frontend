import React from 'react';
import PropTypes from 'prop-types';

class HostLotForm extends React.Component {
  constructor(props) {
    super(props);

    var now = new Date().toISOString().slice(0, 16);

    if (props.lot) {
      this.state = props.lot;
      this.state.startTime = props.lot.startTime.slice(0, 16);
      this.state.endTime = props.lot.endTime.slice(0, 16);
    }
    else {
      this.state = { name:  '', description: '', address: '', price: 0, startTime: now, endTime: now };
    }

    this.handleHostLotFormChange = this.handleHostLotFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHostLotFormChange(e) {
    let {name, value} = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let lot = {...this.state};
    lot.startTime = new Date(Date.parse(lot.startTime + ':00'));
    lot.endTime = new Date(Date.parse(lot.endTime + ':00'));
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
          type='number'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleHostLotFormChange}
        />

        <input
          name='endTime'
          type='datetime-local'
          placeholder='endTime'
          value={this.state.endTime}
          onChange={this.handleHostLotFormChange}
        />

        <input
          name='startTime'
          type='datetime-local'
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
  price: PropTypes.number,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  lot: PropTypes.object,
  onComplete: PropTypes.func,
  buttonText: PropTypes.string
};


export default HostLotForm;