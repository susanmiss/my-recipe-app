import React from 'react';
import ReactDOM from 'react-dom'
import {shallow, mount} from 'enzyme'; 
import renderer from 'react-test-renderer';
import SingleRecipe from '../components/SingleRecipe'
import axios from 'axios'


const setup = (props={}) => {
    return shallow(<SingleRecipe {...props} />)
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}



it('renders correctly', () => {
    const tree = renderer
        .create(<SingleRecipe />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

const wrapper = shallow(<SingleRecipe />)

  
  it('should render a <div />', () => {
      expect(wrapper.find('div').length).toEqual(3);
  });

  it('should render 2 p tags', () =>{
    expect(wrapper.find('p').length).toEqual(1);
  });

  it('should render 1 h1 tag', () =>{
    expect(wrapper.find('h1').length).toEqual(1);
  });
 

