import React, { Component } from 'react';
import '../../styles/shared.css';

class SumBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: this.formatSum(this.props.sum)
    }
    this.formatSum = this.formatSum.bind(this);
  }

  formatSum(sum) {
    if (sum > 999) {

      const maxThousandDigits = 6;
      const maxMillionDigits = 9;
      const maxBillionDigits = 12;
      const maxTrillionDigits = 15;
      let numSuffix;
      let decimalPosition;
      sum = sum.toString();

      if (sum.length <= maxThousandDigits) {
        numSuffix = 'K';
        decimalPosition = maxThousandDigits - sum.length;
      }
      else if (sum.length <= maxMillionDigits) {
        numSuffix = 'M';
        decimalPosition = maxMillionDigits - sum.length;
      }
      else if (sum.length <= maxBillionDigits) {
        numSuffix = 'B';
        decimalPosition = maxBillionDigits - sum.length;
      } 
      else if (sum.length <= maxTrillionDigits) {
        numSuffix = 'T';
        decimalPosition = maxTrillionDigits - sum.length;
      } else {
        alert('Whoops, only sums up to 999,999,999,999,999 are supported!');
      }

      sum = sum.substring(0, 3) 
      if (decimalPosition) {
        let decimalPositionFromLeft = (sum.length - 1) - decimalPosition;
        sum = sum.substring(0, decimalPositionFromLeft + 1) + '.' + sum.substring(decimalPositionFromLeft + 1, sum.length + 1);
      }
      return sum + numSuffix;
    }

    return sum;
  }

  render() {
    return (
      <div className='box box--sum'>
        <input class='box__input' readOnly value={ this.formatSum(this.props.sum) } />
      </div>
    )
  }
}

export default SumBox;