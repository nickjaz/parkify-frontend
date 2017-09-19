import './_modal.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    return (
      <section className='modal'>
        <button onClick={this.props.close}>X</button>
        <div className='modal-content'>
          {this.props.children}
        </div>
      </section>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.array,
  close: PropTypes.func
};

export default Modal;
