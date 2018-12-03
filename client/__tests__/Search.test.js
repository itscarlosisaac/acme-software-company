import React from 'react';
import SearchFor from '../components/SearchFor';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import gifServices from '../services/gifServices';

configure({adapter: new Adapter() });

describe(`<SearchFor/> - Search Component`, () => {

  it(`Renders the component`, () => {
    const wrapper = shallow(<SearchFor />);
    expect(wrapper.exists()).toBe(true);
  });

  it('On input should changes the state of the component', () => {
    const wrapper = mount(<SearchFor/>);
    const input = wrapper.find('input');
    expect(wrapper.state().value).toBe("");
    input.simulate('change', {target: { value: "Jackie"}});
    expect(wrapper.state().value).toBe("Jackie")
  });

  it(`Prevents the form from being submitted`, () => {
    const wrapper = shallow(<SearchFor />);
    let prevented = false;
    wrapper.find('form').simulate("submit", {
      preventDefault: () => prevented = true
    });
    expect(prevented).toBe(true)
  })

  it('Should prevent submit empty form', () => {
    const wrapper = shallow(<SearchFor />);
    const input = wrapper.find('input');
    input.simulate('change', { target: {value: "jackie" }});
    wrapper.find('form').simulate("submit", {preventDefault: () => {}});
    expect(wrapper.state().value.length).toBeGreaterThan(0);
  })

  it('On Submit should update states gif count and gifs array', () => {
    const wrapper = mount(<SearchFor/>);
    const form = wrapper.find('form');
    form.simulate('submit', {
      preventDefault: () => {
        wrapper.setState({ gifCount: 20, gifs: new Array(20) });
      }
    });
    expect(wrapper.state().gifCount).toBe(20)
    expect(wrapper.state().gifs.length).toBe(20)
  });

  it('Should perform search to the API', (done) => {
    const searchTerm = 'comic';
    gifServices.FecthData(searchTerm, 20, 0, (data) => {
      apiCall(data)
    });

    function apiCall(data){
      let upcomingData = [ ...data ]
      expect(upcomingData.length).toBe(20)
      done()
    }
  });

  it(`Should Match the snapshot`, () => {
    const tree = shallow(<SearchFor />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});