import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // привязка контекста this
    this.handleClick = this.handleClick.bind(this);
  }

  //  2 vetsion

  // state = {
  //   count: 0,
  // };
  // handleClick = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  // handleClick = () => {
  //   // this.setState(
  //   //   (prevState) => ({ count: prevState.count + 1 }),
  //   //   () => console.log('setState complete')
  //   // );
  //   this.setState((prevState) => ({ count: prevState.count + 1 }));
  //   // this.setState((prevState) => ({ count: prevState.count + 1 }));

  //   // console.log('from handle click'); // be first
  // };

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        Click on Me !!!
        {/* <button onClick={this.handleClick}>{this.state.count}</button>; */}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.state.count}
        </button>
        ;
      </div>
    );
  }
}

export default App;
