import React from 'react';
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'; 
import renderer from 'react-test-renderer';
import UpdateRecipe from '../components/UpdateRecipe'


describe("<UpdateRecipe />", () => {
    
 
  it('renders correctly', () => {
      const tree = renderer
          .create(<UpdateRecipe />)
          .toJSON();
      expect(tree).toMatchSnapshot();
  });
  let wrapper;
  beforeEach(() => wrapper = shallow(<UpdateRecipe />));
  
  it('Renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
  })
  
  it('should render a <div />', () => {
      expect(wrapper.find('div').length).toEqual(4);
  });


 
})