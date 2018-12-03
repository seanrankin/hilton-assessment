import React, { Component } from 'react';
import {
  setRoomEnabled,
  updateAdults,
  updateChildren,
} from '../actions/reservations';

import { Fieldset } from './Fieldset';
import { Form } from './Form';
import { FormGroup } from './FormGroup';
import { Label } from './Label';
import { Legend } from './Legend';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Room extends Component {
  handleCheck = () => {
    const {
      id,
      room: { checked },
      rooms,
      setRoomEnabled,
      updateAdults,
      updateChildren,
    } = this.props;

    setRoomEnabled(id);

    // Reset dropdowns
    if (checked) {
      updateAdults(id, 1);
      updateChildren(id, 0);
    }

    // Handle toggle check rooms for before and after
    if (!checked && id > 2) {
      for (let i = id - 1; i > 1; i--) {
        if (!rooms[`room${i}`].checked) {
          setRoomEnabled(i);
        }
      }
    } else if (checked && id > 1 && id < 4) {
      for (let i = id + 1; i <= 4; i++) {
        if (rooms[`room${i}`].checked) {
          setRoomEnabled(i);
          updateAdults(i, 1);
          updateChildren(i, 0);
        }
      }
    }
  };

  handleSelect = name => event => {
    const { id, updateAdults, updateChildren } = this.props;
    const {
      target: { value },
    } = event;

    if (name === 'adults') {
      updateAdults(id, +value);
    } else {
      updateChildren(id, +value);
    }
  };

  render() {
    const {
      id,
      room: { adults, children, checked },
    } = this.props;

    return (
      <Fieldset checked={checked}>
        <Legend id={id} checked={checked}>
          <input
            type="checkbox"
            name={`room${id}enabled`}
            checked={checked}
            onChange={this.handleCheck}
            style={{ display: id === 1 ? 'none' : 'inline' }}
          />
          <span>{`Room ${id}`}</span>
        </Legend>
        <Form>
          <FormGroup>
            <Label htmlFor={`adults${id}`}>
              Adults
              <br />
              (18+)
            </Label>
            <select
              id={`adults${id}`}
              value={adults}
              disabled={!checked}
              onChange={this.handleSelect('adults')}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor={`children${id}`}>
              Children
              <br />
              (0-17)
            </Label>
            <select
              id={`children${id}`}
              value={children}
              disabled={!checked}
              onChange={this.handleSelect('children')}
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </FormGroup>
        </Form>
      </Fieldset>
    );
  }
}

Room.propTypes = {
  id: PropTypes.number.isRequired,
  room: PropTypes.object.isRequired,
  rooms: PropTypes.object.isRequired,
  setRoomEnabled: PropTypes.func.isRequired,
  updateAdults: PropTypes.func.isRequired,
  updateChildren: PropTypes.func.isRequired,
};

const mapStateToProps = ({ reservations }, { id }) => {
  const room = reservations[`room${id}`];
  const rooms = reservations;

  return {
    rooms,
    room,
  };
};

export default connect(
  mapStateToProps,
  { setRoomEnabled, updateAdults, updateChildren }
)(Room);
