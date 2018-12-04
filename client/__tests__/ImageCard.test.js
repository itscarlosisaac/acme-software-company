import React from 'react';
import ImageCard from '../components/ImageCard';

import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';


configure({adapter: new Adapter() });

const imageURL = 'https://media0.giphy.com/media/3o7TKqLfSYZwuyJfCo/giphy_s.gif'
const title = 'My image';

describe('<LoadMoreButton>', () => {
  it('Should render component properly', () => {
    const wrapper = shallow(<ImageCard image={imageURL} title={title} handleThumbClick={()=> {}} />)
    expect(wrapper.find('img').props().src).toBe(imageURL);
    expect(wrapper.find('img').props().alt).toBe(title);
    expect(wrapper.find('h3').text()).toBe(title);
    const f = typeof wrapper.instance().props.handleThumbClick;
    expect(f).toBe('function')
  });

  it(`Should call the handleThumbClick on click`, () => {
    const mockCB = jest.fn();
    const wrapper = shallow(<ImageCard image={imageURL} title={title} handleThumbClick={mockCB} />)
    wrapper.simulate('click')
    expect(mockCB.mock.calls.length).toEqual(1)
  });

  it(`Matches the snapshot`, () => {
    const tree = shallow(<ImageCard image={imageURL} title={title} handleThumbClick={()=> {}} />)
    expect(toJson(tree)).toMatchSnapshot();
  });
});