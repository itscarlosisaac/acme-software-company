import React from 'react';
import Logo from '../components/Logo';

import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter() });

describe(`<Logo /> - Logo Component`, () => {

  it(`Renders the component`, () => {
    const wrapper = shallow(<Logo w={140} />);
    expect(wrapper.exists()).toBe(true);
  });

  it(`Should accept a size prop`, () => {
    const wrapper = shallow(<Logo w={140} />);
    expect(wrapper.instance().props.w).toBe(140);
  });

  it(`Should render an image tag`, () => {
    const wrapper = shallow(<Logo w={140} />);
    expect(wrapper.find('img').type()).toEqual('img')
  });

  it(`Should Match the snapshot`, () => {
    const tree = shallow(<Logo w={140} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});