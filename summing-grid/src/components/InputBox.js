import React, { Component } from 'react';

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.value === '') {
      e.target.value = 0;
    }

    this.setState({ num: parseInt(e.target.value, 10) },
      () => {
        this.props.updateNums(this.state.num, this.props.inputId);
      });
  }

  render() {
    return (
      <div className='box box--input'>
        <input type='number' min='0' value={ this.state.num } onChange={ this.handleChange } />
      </div>
    )
  }
};

export default InputBox;