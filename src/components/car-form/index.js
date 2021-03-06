import './_car-form.scss';
import React from 'react';
import PropTypes from 'prop-types';

class CarForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.car ?
      props.car : { make: '', model: '', color: '',  licensePlate: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value, type} = e.target;

    if(type === 'number') {
      try {
        this.setState({
          [name]: parseInt(value)
        });
      } catch(err) {
        console.log(err);
      }
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state)
    .then(() => {
      this.setState({ make: '', model: '', color: '',  licensePlate: '' });
    });
  }

  render() {
    return (
      <div>
        <form className='car-form'
          onSubmit={this.handleSubmit}>
          <input
            name='make'
            type='text'
            placeholder='Car Make'
            value={this.state.make}
            onChange={this.handleChange}
          />

          <input
            name='model'
            type='text'
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
            type='text'
            placeholder='License Plate #'
            value={this.state.licensePlate}
            onChange={this.handleChange}
          />
          <button type='submit'>{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

CarForm.propTypes = {
  car: PropTypes.obj,
  onComplete: PropTypes.func,
  buttonText: PropTypes.string
};

export default CarForm;
