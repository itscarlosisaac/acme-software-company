import React from 'react';
import App from '../components/App';
import LightBox from '../components/LightBox';

import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter() });
const image = {
  title: "My image",
  images: {
    downsized: {
      url: "https://avatars1.githubusercontent.com/u/19247005?s=60&v=4"
    }
  }
}
describe('<LoadMoreButton>', () => {
  it('Should render component', () => {
    const wrapper = shallow(<LightBox image={image} next={()=> {}} prev={()=>{}} close={()=>{}} />);
    expect(wrapper.find('.app__lightbox__close').length).toBe(1);
    expect(wrapper.find('.app__lightbox__prev').length).toBe(1);
    expect(wrapper.find('.app__lightbox__next').length).toBe(1);
    expect(wrapper.find('.app__lightbox__next').length).toBe(1);
    expect(wrapper.find('.app__lightbox__title').length).toBe(1);
    expect(wrapper.find('.app__lightbox__title').text().length).toBeGreaterThan(0)
  });

  it(`Should call next on click to next button`, () => {
    const mockCall = jest.fn();
    const wrapper = shallow(<LightBox image={image} next={mockCall} prev={()=>{}} close={()=>{}} />);
    wrapper.find('.app__lightbox__next').simulate('click')
    expect(mockCall.mock.calls.length).toEqual(1)
  });

  it(`Should call prev on click to next button`, () => {
    const mockCall = jest.fn();
    const wrapper = shallow(<LightBox image={image} next={()=>{}} prev={mockCall} close={()=>{}} />);
    wrapper.find('.app__lightbox__prev').simulate('click')
    expect(mockCall.mock.calls.length).toEqual(1)
  });

  it(`Should call close on click to next button`, () => {
    const mockCall = jest.fn();
    const wrapper = shallow(<LightBox image={image} next={()=>{}} prev={()=>{}} close={mockCall} />);
    wrapper.find('.app__lightbox__close').simulate('click')
    expect(mockCall.mock.calls.length).toEqual(1)
  });

  it(`Matches the snapshot`, () => {
    const tree = shallow(<LightBox image={image} next={()=> {}} prev={()=>{}} close={()=>{}} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});