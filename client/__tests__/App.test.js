import React from 'react';
import App from '../components/App';
import SearchFor from '../components/SearchFor';
import ImageCard from '../components/ImageCard';
import gifServices from '../services/gifServices';
import { configure, shallow } from 'enzyme';
import Adapter from  'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
configure({adapter: new Adapter() });


describe('<App /> - App Component', () => {
  it(`Should render app component`, () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Should have a child Header and Footer component', () => {
    const wrapper = shallow(<App/>);
    expect( wrapper.find('Header').length ).toBeGreaterThan(0)
    expect( wrapper.find('Footer').length ).toBeGreaterThan(0)
  });

  it(`Should update hasSearch state on search perform.`, () => {
    const wrapper = shallow(<App />);
    expect( wrapper.state().hasSearch).toBe(false)
    const search = shallow(<SearchFor />);
    const form = search.find('form');
    const input = search.find('input');
    input.simulate('change', { target: {value: "jackie" }});
    form.simulate('submit', {
      preventDefault: () => {
        wrapper.setState({ hasSearch: true, searchValue: "jackie" });
      }
    });
    expect( wrapper.state().hasSearch).toBe(true)
    expect( wrapper.state().searchValue).toEqual("jackie")
  });

  it(`Should update search related count on form submit.`, (done) => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().loadedGif.length).toBe(0)
    expect(wrapper.state().count).toBe(0)
    const search = shallow(<SearchFor />);
    const form = search.find('form');
    const input = search.find('input');
    input.simulate('change', { target: {value: "jackie" }});
    form.simulate('submit', {
      preventDefault: () => {
        wrapper.setState({
          hasSearch: true,
          searchValue: "jackie"
        });
      }
    });
    gifServices.FecthData('jackie', 20, 0, (data) => {
      apiCall(data)
    });
    function apiCall(data){
      let upcomingData = [ ...data ]
      wrapper.setState({
        count: upcomingData.length,
        offset: upcomingData.length,
        loadedGif: upcomingData
      });
      expect(wrapper.state().count).toBe(20)
      expect(wrapper.state().offset).toBe(20)
      expect(wrapper.state().loadedGif.length).toBe(20)
      done()
    }
  });
});


describe('<App /> - Lightbox Related Tasks', () => {
  it(`Should no show the lightbox on initial load`, () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.state().showLightBox).toBe(false);
  });

  it(`Should show the lightbox on click on a thumbnail`, () => {
    const wrapper = shallow(<App />);
    const thumbnail = shallow( <ImageCard image="null" title="null" handleThumbClick={() => { wrapper.setState({showLightBox : true})}} /> );
    thumbnail.simulate('click');
    expect(wrapper.state().showLightBox).toBe(true)
  });
});