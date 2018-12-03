import React from 'react';
import App from '../components/App';

import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter() });

describe('<App /> - App Component', () => {
  it(`Should render app component`, () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
