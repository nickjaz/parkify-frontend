import React from 'react';
import ProfileForm from '../profile-form';
import CarForm from '../car-form';

class SettingsContainer extends React.Component {
  render() {
    return (
      <div className='settings-container'>
        <ProfileForm />
        <CarForm />
      </div>
    );
  }
}

export default SettingsContainer;
