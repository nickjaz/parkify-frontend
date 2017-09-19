import React from 'react';
import {connect} from 'react-redux';
import {updateProfileRequest} from '../../actions/profile-actions.js';
import PropTypes from 'prop-types';

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {...props.profile};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    return this.props.updateProfile(this.state);
  }

  render() {
    return (
      <form
        className='profile-form'
        onSubmit={this.handleSubmit} >

        <input
          type='text'
          name='name'
          onChange={this.handleChange}
        />

        <input
          type='text'
          name='email'
          onChange={this.handleChange}
        />

        <label htmlFor='host'>Would you like to rent your space?</label>
        <input
          type='checkbox'
          name='host'
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

ProfileForm.propTypes = {
  updateProfile: PropTypes.func,
  profile: PropTypes.object
};

let mapStateToProps = (state) => ({
  profile: state.profile
});

let mapDispatchToProps = (dispatch) => ({
  updateProfile: (profile) => dispatch(updateProfileRequest(profile))
});

export default connect (mapStateToProps, mapDispatchToProps)(ProfileForm);
