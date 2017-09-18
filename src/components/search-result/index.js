import React from 'react';
import PropTypes from 'prop-types';

class SearchResult extends React.Component {
  render() {
    return (
      <div className='search-result'>
        <h3 className='lot-name'>{this.props.lot.name}</h3>
        <p className='lot-address'>{this.props.lot.address}</p>
        <p className='lot-description'>{this.props.lot.description}</p>
      </div>
    );
  }
}

SearchResult.propTypes = {
  lot: PropTypes.object
};

export default SearchResult;