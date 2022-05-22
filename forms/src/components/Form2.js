import React from 'react';

// don't change the Component name "App"
class Form2 extends React.Component {
  state = {
    email: '',
    isAgreeWithTerms: false,
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleCheckbox = (event) => {
    this.setState({ isAgreeWithTerms: event.target.checked });
  };

  handleSubmit = () => {
    const isValidEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        this.state.email.toLowerCase()
      );

    const isValidCheckBox = this.state.isAgreeWithTerms;

    if (!isValidEmail) {
      alert('your email is not valid');
      return;
    }

    if (!isValidCheckBox) {
      alert('you should accept all terms and conditions');
      return;
    }

    this.setState({
      email: '',
      isAgreeWithTerms: false,
    });

    alert('thanks you for subscription');
  };

  render() {
    // TODO: implement component
    const { email, isAgreeWithTerms } = this.state;

    return (
      <div>
        <input
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChange={this.handleEmail}
        />
        <br />
        <label>
          <input
            type='checkbox'
            name='isAgreeWithTerms'
            checked={isAgreeWithTerms}
            onChange={this.handleCheckbox}
          />
          I agree with terms and conditions
        </label>
        <br />
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    );
  }
}

export default Form2;
