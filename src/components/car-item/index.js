import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import CarForm from '../car-form';
import * as util from '../../lib/utilities.js';
import {deleteCarRequest, updateCarRequest} from '../../actions/car-actions';

class CarItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updating: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete() {
    let {car} = this.props;
    return this.props.deleteCar(car)
    .catch(error => {
      console.error(error);
    });
  }

  handleUpdate(car) {
    return this.props.updateCar(car)
    .then(() => {
      this.setState({ updating: false });
    });
  }

  render() {
    let {car} = this.props;

    return (
      <div>
        {util.renderIf(!this.state.updating,
          <div>
            <p>placeholder car symbol</p>
            <p>make: {car.make}</p>
            <p>model: {car.model}</p>
            <p>color: {car.color}</p>
            <p>license plate:{car.licensePlate}</p>
            <button onClick={this.handleDelete}>remove</button>
            <button onClick={() => this.setState({ updating: true })}>edit</button>
          </div>
        )}

        {util.renderIf(this.state.updating,
          <div>
            <CarForm
              car={this.props.car}
              buttonText='update'
              onComplete={this.handleUpdate}
            />
          </div>
        )}
      </div>
    );
  }
}

CarItem.propTypes = {
  updateCar: PropTypes.func,
  deleteCar: PropTypes.func,
  car: PropTypes.object
};

let mapDispatchToProps = (dispatch) => ({
  deleteCar: (car) => dispatch(deleteCarRequest(car)),
  updateCar: (car) => dispatch(updateCarRequest(car))
});

export default connect(undefined, mapDispatchToProps)(CarItem);
