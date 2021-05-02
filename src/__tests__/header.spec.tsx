import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Test Header component', () => {
  it('Check if component Header is rendered', () => {
    const wrap = shallow(<Header />);

    expect(wrap.exists()).toBe(true);
  });
});
