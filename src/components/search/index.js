import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SearchBar from '../search-bar';
import SearchResult from '../search-result';
import {fetchProfileRequest} from '../../actions/profile-actions.js';

class Search extends React.Component {
  componentDidMount() {
    if (!this.props.profile) {
      this.props.fetchProfile();
    }
  }


  render() {
    return (
      <div className='search'>
        <div className='cool-bar'>
          <p>solving the city&#39;s parking problem</p>
        </div>
        <h2><i className='fa fa-search'></i> Search </h2>
        <h4>Need a place to park? Enter an address to find spots nearby!</h4>
        <SearchBar />
        <div className='search-results'>
          {this.props.nearbyLots ? this.props.nearbyLots.map(lot => <SearchResult key={lot._id} lot={lot} />) : undefined}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  nearbyLots: PropTypes.array,
  profile: PropTypes.object,
  fetchProfile: PropTypes.func
};

const mapStateToProps = (state) => ({
  nearbyLots: state.nearbyLots,
  profile: state.profile
});

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: () => dispatch(fetchProfileRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
