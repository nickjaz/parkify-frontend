import React from 'react';
import PropTypes from 'prop-types';

class HostLotForm extends React.Component {
  constructor(props) {
    super(props);

    let d = new Date();
    let h = (d.getHours() < 10 ? '0' : '') + d.getHours();
    let m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();

    let defaultTime = h + ':' + m;

    this.state = {
      name: props.lot ? props.lot.name : '',
      description: props.lot ? props.lot.description : '',
      address: props.lot ? props.lot.address : '',
      price: props.lot ? props.lot.prices[0].price : 0,
      startTime: props.lot ? props.lot.prices[0].startTime : defaultTime,
      endTime: props.lot ? props.lot.prices[0].endTime : defaultTime
    };

    this.handleHostLotFormChange = this.handleHostLotFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleHostLotFormChange(e) {
    console.log(e.target);
    let {name, value} = e.target;

    this.setState({
      [name]: value,
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
          type='time'
          placeholder='endTime'
          value={this.state.endTime}
          onChange={this.handleHostLotFormChange}
        />

        <input
          name='startTime'
          type='time'
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
  lot: PropTypes.object,
  onComplete: PropTypes.func,
  buttonText: PropTypes.string
};


export default HostLotForm;