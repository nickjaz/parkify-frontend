import './_search-result.scss';
import React from 'react';
import PropTypes from 'prop-types';
import * as util from '../../lib/utilities.js';
import ReservationForm from '../reservation-form';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reserving: false
    };
  }

  render() {
    let {lot} = this.props;

    return (

      <div className='search-result'>
        <h3 className='lot-name'>
          <i className='fa fa-map-pin'></i>
          {lot.name}
        </h3>
        <p className='lot-address'>{lot.address}</p>
        <p className='lot-description'>{lot.description}</p>

        {util.renderIf(!this.state.reserving,
          <button className='reserve' onClick={() => this.setState({ reserving: true })}>Reserve</button>
        )}

        {util.renderIf(this.state.reserving,
          <ReservationForm lot={lot} stopReserving={() => {
            this.setState({ reserving: false});
          }} />
        )}
      </div>
    );
  }
}

SearchResult.propTypes = {
  lot: PropTypes.object
};

export default SearchResult;
