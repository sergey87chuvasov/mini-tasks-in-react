import React from 'react';

// don't change the Component name "App"
class UncontrolledForm extends React.Component {
  constructor() {
    super();

    this.cardRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.cardRef.current.value.length < 16) {
      alert(' problem');
      return;
    }
    // send fetc
    this.cardRef.current.value = '';
    this.emailRef.current.value = '';
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='card' placeholder='card' ref={this.cardRef} />
        <input
          type='email'
          name='email'
          placeholder='email'
          ref={this.emailRef}
        />
        <button>Send</button>
      </form>
    );
  }
}

export default UncontrolledForm;
