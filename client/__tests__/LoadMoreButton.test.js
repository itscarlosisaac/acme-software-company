import React from 'react';
import LoadMoreButton from '../components/LoadMoreButton';

import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter() });

describe('<LoadMoreButton>', () => {
  it('Should render component', () => {
    const wrapper = shallow(<LoadMoreButton handleLoadMore={()=> {}} />)
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').text()).toBe('Load More Gifs');
    expect(wrapper.find('div').hasClass('app__load__more')).toBe(true);
  });

  it(`Should have a function as a prop`, () => {
    const wrapper = shallow(<LoadMoreButton handleLoadMore={()=> {}} />)
    const f = typeof wrapper.instance().props.handleLoadMore;
    expect(f).toBe('function')
  });

  it(`Should perform an action on click`, () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<LoadMoreButton handleLoadMore={mockCallBack()} />)

    wrapper.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it(`Matches the snapshot`, () => {
    const tree = shallow(<LoadMoreButton handleLoadMore={()=>{}} />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});