import React from 'react';
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'; 
import renderer from 'react-test-renderer';
import CreateRecipe from '../components/CreateRecipe'


describe("<CreateRecipe />", () => {
    
  it('mounts to DOM', () => {
      const div = document.createElement('div');
      ReactDOM.render(<CreateRecipe />, div);
      ReactDOM.unmountComponentAtNode(div);
  });
  it('renders correctly', () => {
      const tree = renderer
          .create(<CreateRecipe />)
          .toJSON();
      expect(tree).toMatchSnapshot();
  });
  let wrapper;
  beforeEach(() => wrapper = shallow(<CreateRecipe />));
  
  it('Renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
  })
  
  it('should render a <div />', () => {
      expect(wrapper.find('div').length).toEqual(4);
  });

  it('should render 1 form', () =>{
    expect(wrapper.find('form').length).toEqual(1);
})
 
})