import React from 'react';
import { shallow } from 'enzyme';
import SumBox from './SumBox';

it('renders the SumBox component', () => {
  const wrapper = shallow(<SumBox sum={0} />);
  expect(wrapper.find('div.box.box--sum').length).toBe(1);
  expect(wrapper.find('input.box__input').length).toBe(1);
});