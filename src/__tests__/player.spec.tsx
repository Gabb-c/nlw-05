import React from 'react';
import { shallow } from 'enzyme';
import Player from '../components/Player';

describe('Test Player component', () => {
  it('Check if component Player is rendered', () => {
    const wrap = shallow(<Player />);

    expect(wrap.exists()).toBe(true);
  });
});
