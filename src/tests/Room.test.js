import { Form } from '../components/Form';
import { Legend } from '../components/Legend';
import React from 'react';
import ReactDOM from 'react-dom';
import { Room } from '../components/Room';
import { shallow } from 'enzyme';

describe('Room Component', () => {
  let wrapper;

  const props = {
    id: 2,
    room: { adults: 1, children: 0, checked: true },
    rooms: {},
    setRoomEnabled: () => {},
    updateAdults: () => {},
    updateChildren: () => {},
  };

  beforeEach(() => {
    wrapper = shallow(<Room {...props} />);
  });

  afterEach(() => {
    wrapper.setProps(props);
  });

  it('should render', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display the legend', () => {
    const legend = wrapper.find(Legend);
    expect(legend).toHaveLength(1);

    const [checkbox, label] = legend.props().children;
    expect(checkbox.type).toBe('input');
    expect(label.props.children).toBe('Room 2');
  });

  it('should display the selection inputs', () => {
    const form = wrapper.find(Form);
    expect(form).toHaveLength(1);

    const [adults, children] = form.props().children;
    const [adultLabel, adultSelect] = adults.props.children;
    const [childrenLabel, childrenSelect] = children.props.children;

    expect(adultLabel.props.children).toEqual(['Adults', <br />, '(18+)']);
    expect(adultSelect.type).toBe('select');
    expect(adultSelect.props.disabled).toBe(false);
    expect(adultSelect.props.children).toHaveLength(2);

    expect(childrenLabel.props.children).toEqual([
      'Children',
      <br />,
      '(0-17)',
    ]);
    expect(childrenSelect.type).toBe('select');
    expect(childrenSelect.props.disabled).toBe(false);
    expect(childrenSelect.props.children).toHaveLength(3);
  });

  it('should display readonly when unchecked', () => {
    wrapper.setProps({ room: { adults: 1, children: 0, checked: false } });

    const form = wrapper.find(Form);
    const [adults, children] = form.props().children;
    const [, adultSelect] = adults.props.children;
    const [, childrenSelect] = children.props.children;

    expect(adultSelect.props.disabled).toBe(true);
    expect(childrenSelect.props.disabled).toBe(true);
  });
});
