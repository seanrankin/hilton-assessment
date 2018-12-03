import App from '../App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Reservations } from '../components/Reservations';
import { shallow } from 'enzyme';

describe('The App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
