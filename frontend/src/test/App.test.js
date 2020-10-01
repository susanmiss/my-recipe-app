import React from 'react';
import ReactDOM from 'react-dom'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import {shallow} from 'enzyme'; 

import renderer from 'react-test-renderer';
import App from '../App'


const wrapper = shallow(<App />)
  
test('mounts to DOM', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('renders correctly', () => {
    const tree = renderer
        .create(<App />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders widhout crashing', () => {
  console.log(wrapper.debug()); 
  expect(wrapper).toBeTruthy(); //see if teh wrapper exists.
});

test('should render a BrowserRouter component', () =>{
    expect(wrapper.find('BrowserRouter').length).toEqual(1);
})

test('should render a Switch component', () =>{
    expect(wrapper.find('Switch').length).toEqual(1);
})

test('renders <Nav/>', () => {
  const navComponent = wrapper.find("Nav")
  expect(navComponent.length).toBe(1);
})


test('renders <Route/>', () => {
    const routeComponent = wrapper.find("Route")
    expect(routeComponent.length).toBe(4);
})