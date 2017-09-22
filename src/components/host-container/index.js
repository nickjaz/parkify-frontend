import './_host-dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/utilities.js';
import PropTypes from 'prop-types';
import Banner from '../banner';
import {fetchLotsRequest, createLotRequest} from '../../actions/host-lot-actions.js';
import HostLotForm from '../host-lot-form';
import HostLotItem from '../host-lot-item';

class HostContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchHostLots()
    .catch(util.logError);
  }

  render() {
    return (
      <div>
        <div className='host-dashboard'>
          <Banner />
          <div className='host-content'>
            <h2><i className='fa fa-plus-square'></i> Lots</h2>
            <p>Rent out your parking spots with Parkify!</p>
            <HostLotForm
              buttonText='Add Lot'
              onComplete={(lot) => {
                return this.props.createLot(lot)
                .catch(console.error);
              }}
            />
          </div>
          <ul>
            {this.props.lots.map((lot, index) =>
              <li className='lots-li'key={index}>
                <HostLotItem lot={lot} />
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lots: state.hostLots,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    fetchHostLots: () => dispatch(fetchLotsRequest()),
    createLot: (lot) => dispatch(createLotRequest(lot))
  };
};

HostContainer.propTypes = {
  lots: PropTypes.array,
  createLot: PropTypes.func,
  fetchHostLots: PropTypes.func
};


export default connect(mapStateToProps, mapDispatchToProps)(HostContainer);
