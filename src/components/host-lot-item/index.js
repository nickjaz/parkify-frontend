import React from 'react';
import {connect} from 'react-redux';

import HostLotForm from '../host-lot-form';
import * as util from '../../lib/utilities.js';
import * as hostLotActions from '../../actions/host-lot-actions.js';

export class HostLotItem extends React.Component {
  render() {
    let {lot, deleteLot, updateLot} = this.props;

    return (
      <div className="host-lot-item">
        <HostLotForm
          lot={lot}
          buttonText='update lot'
          onComplete={updateLot}
        />

        <button onClick={() => deleteLot(lot)}>delete</button>
      </div>
    );
  }
}

let mapStateToProps = ({});

let mapDispatchToProps = (dispatch) => ({
  deleteLot: (lot) => dispatch(hostLotActions.deleteLotRequest(lot)),
  updateLot: (lot) => dispatch(hostLotActions.updateLotRequest(lot))
});

export default connect(mapStateToProps, mapDispatchToProps)(HostLotItem);