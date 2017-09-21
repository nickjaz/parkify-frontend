import React from 'react';
import PropTypes from 'prop-types';

class HostLotForm extends React.Component {
  constructor(props) {
    super(props);

    var now = new Date();

    let year = now.getFullYear();
    let month = now.getMonth().toString().length === 1 ? '0' + (now.getMonth() + 1).toString() : now.getMonth() + 1;
    let date = now.getDate().toString().length === 1 ? '0' + (now.getDate()).toString() : now.getDate();
    let hours = now.getHours().toString().length === 1 ? '0' + now.getHours().toString() : now.getHours();
    let minutes = now.getMinutes().toString().length === 1 ? '0' + now.getMinutes().toString() : now.getMinutes();

    let d = year + '-' + month + '-' + date + 'T' + hours + ':' + minutes;

    this.state = props.lot ?
      props.lot : { name:  '', description: '', address: '', price: 0, startTime: d, endTime: d };

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