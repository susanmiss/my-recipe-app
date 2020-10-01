import React from 'react';
import ReactDOM from 'react-dom'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import {shallow} from 'enzyme'; 

import renderer from 'react-test-renderer';
import Nav from '../components/Nav'


const wrapper = shallow(<Nav />)
  
const setup = (props={}, state=null) => {
    const wrapper = shallow(<Nav {...props} />)
    if( state ) wrapper.setState(state);
    return wrapper;
  }

test('renders widhout crashing', () => {
    const wrapper = setup();
    console.log(wrapper.debug()); 
    expect(wrapper).toBeTruthy(); 
  });

test('should render a nav element', () =>{
    expect(wrapper.find('nav').length).toEqual(1);
})

test('should render a ul element', () =>{
    expect(wrapper.find('ul').length).toEqual(1);
})

test('renders a li', () => {
    expect(wrapper.find('li').length).toEqual(2);
})


