import './_host-lot-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import HostLotForm from '../host-lot-form';
import * as util from '../../lib/utilities.js';
import * as hostLotActions from '../../actions/host-lot-actions.js';

export class HostLotItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      updating: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleDelete() {
    let {lot, deleteLot} = this.props;

    return deleteLot(lot)
    .catch(error => {
      console.log(error);
    });
  }

  handleUpdate(lot) {
    let {updateLot} = this.props;
    return updateLot(lot)
    .then(() => {
      this.setState({ updating: false });
    });
  }

  render() {
    let {lot} = this.props;
    let {updating} = this.state;

    return (
      <div className='host-lot-form'>
        {util.renderIf(!updating,
          <div>
            <h3 className='lot-name'>{lot.name}</h3>
            <button className='remove' onClick={this.handleDelete}>X</button>
            <button className='edit' onClick={() => {
              this.setState({ updating: true });
              console.log('before the reveal LOT:', lot);
            }}>Edit</button>
          </div>
        )}

        {util.renderIf(updating,
          <div>
            <HostLotForm
              lot={this.props.lot}
              buttonText='Update'
              onComplete={this.handleUpdate}
            />
          </div>
        )}
      </div>
    );
  }
}

HostLotItem.propTypes = {
  deleteLot: PropTypes.func,
  updateLot: PropTypes.func,
  lot: PropTypes.object
};

let mapDispatchToProps = (dispatch) => ({
  deleteLot: (lot) => dispatch(hostLotActions.deleteLotRequest(lot)),
  updateLot: (lot) => dispatch(hostLotActions.updateLotRequest(lot))
});

export default connect(undefined, mapDispatchToProps)(HostLotItem);
