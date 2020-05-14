import React from 'react';
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'; 

import renderer from 'react-test-renderer';
import App from '../App'



describe("<App/>", () => {
    
  it('mounts to DOM', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
  });
  it('renders correctly', () => {
      const tree = renderer
          .create(<App />)
          .toJSON();
      expect(tree).toMatchSnapshot();
  });
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));
  
  it('Renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
  })
  
  it('should render a <div />', () => {
      expect(wrapper.find('div').length).toEqual(0);
  });

  it('should render 4 Routes to App Component', () =>{
    expect(wrapper.find('Route').length).toEqual(4);
})
 
})