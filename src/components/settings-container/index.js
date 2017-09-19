import React from 'react';
import ProfileForm from '../profile-form';
import CarForm from '../car-form';

class SettingsContainer extends React.Component {
  render() {
    return (
      <section>
        <div>{ProfileForm}</div>
        <div>{CarForm}</div>
      </section>
    );
  }
}

export default SettingsContainer;
