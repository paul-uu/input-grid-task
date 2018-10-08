import React, { Component } from 'react';
import InputBox from '../InputBox/InputBox';
import SumBox from '../SumBox/SumBox';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [],
      sum: 0
    };
    this.updateNums = this.updateNums.bind(this);
    this.sumNums = this.sumNums.bind(this);
  }

  updateNums(num, inputId) {
    let nums = this.state.nums;
    nums[inputId - 1] = num;
    this.setState({ nums });
    this.sumNums();
  }

  sumNums() {
    const sum = this.state.nums.reduce((a, b) => a + b );
    this.setState({ sum });
  }

  render() {
    return (
      <div className="App">
        <InputBox updateNums={ this.updateNums } inputId={1} />
        <InputBox updateNums={ this.updateNums } inputId={2} />
        <InputBox updateNums={ this.updateNums } inputId={3} />
        <SumBox sum={ this.state.sum } />
      </div>
    );
  }
}

export default App;
