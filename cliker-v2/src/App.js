import './App.css';
import React, { Component } from 'react';

// const countStyle = {
//   margin: '20px',
//   display: 'inline-block',
// };

// class App extends Component {
//   state = {
//     count: 0,
//   };

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   decrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   render() {
//     return (
//       <div>
//         Click on Me !!!
//         <button onClick={this.decrement}>-</button>
//         <span style={countStyle}>{this.state.count}</span>
//         <button onClick={this.increment}>+</button>
//       </div>
//     );
//   }
// }

const countStyle = {
  margin: '20px',
  display: 'inline-block',
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   // fetch()
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // componentWillUnmount() {}

  render() {
    console.log('render', this.state.count);
    return (
      <div>
        Click on Me !!!
        <button onClick={this.decrement}>-</button>
        <span style={countStyle}>{this.state.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default App;
