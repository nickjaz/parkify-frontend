import React from 'react';
import { connect } from 'react-redux';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
  }
}

render() {
  return (
    <div className='accordion-container'>
      <AccordionItem
        buttonText='yerrrr'
        onComplete={this.handle} />
    </div>

  )
}
