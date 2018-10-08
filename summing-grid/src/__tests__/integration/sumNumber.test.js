import React from 'react';
import { mount } from 'enzyme';
import App from '../../components/App/App';
import InputBox from '../../components/InputBox/InputBox';
import SumBox from '../../components/SumBox/SumBox';

it('should render all components', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find(InputBox).length).toBe(3);
  expect(wrapper.find(SumBox).length).toBe(1);
})

it('should add all of the input values from the InputBox components correctly', () => {
  const wrapper = mount(<App />);
  let testSum = 0;

  wrapper.find(InputBox).forEach(node => {
    node.find('.box__input').simulate('change', {
      target: { value: 3 }
    });
    testSum += 3;
  });

  expect(wrapper.find(SumBox).find('.box__input').props().value).toBe(testSum);
});