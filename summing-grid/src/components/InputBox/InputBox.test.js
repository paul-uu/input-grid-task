import React from 'react';
import { shallow } from 'enzyme';
import InputBox from './InputBox';

it('renders the InputBox component', () => {
  const wrapper = shallow(<InputBox updateNums={ () => 'test function' }  inputId={1} />);
  expect(wrapper.find('div.box.box--input').length).toBe(1);
  expect(wrapper.find('input.box__input').length).toBe(1);
});