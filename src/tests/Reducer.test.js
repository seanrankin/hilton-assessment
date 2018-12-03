import {
  SET_ROOM_ENABLED,
  UPDATE_ADULTS,
  UPDATE_CHILDREN,
} from '../actions/reservations';
import reducer, { initialState } from '../reducers/reservations';

describe('Reservations reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
    expect(initialState).toMatchSnapshot();
  });

  it('should handle SET_ROOM_ENABLED', () => {
    const successAction = {
      type: SET_ROOM_ENABLED,
      id: 3,
    };

    const successObject = {
      room1: {
        adults: 1,
        children: 0,
        checked: true,
      },
      room2: {
        adults: 1,
        children: 0,
        checked: false,
      },
      room3: {
        adults: 1,
        children: 0,
        checked: true,
      },
      room4: {
        adults: 1,
        children: 0,
        checked: false,
      },
    };

    expect(reducer(initialState, successAction)).toEqual(successObject);
  });

  it('should handle UPDATE_ADULTS', () => {
    const successAction = {
      type: UPDATE_ADULTS,
      id: 1,
      adults: 2,
    };

    const successObject = {
      room1: {
        adults: 2,
        children: 0,
        checked: true,
      },
      room2: {
        adults: 1,
        children: 0,
        checked: false,
      },
      room3: {
        adults: 1,
        children: 0,
        checked: false,
      },
      room4: {
        adults: 1,
        children: 0,
        checked: false,
      },
    };

    expect(reducer(initialState, successAction)).toEqual(successObject);
  });

  it('should handle UPDATE_CHILDREN', () => {
    const successAction = {
      type: UPDATE_CHILDREN,
      id: 1,
      children: 2,
    };

    const successObject = {
      room1: {
        adults: 1,
        children: 2,
        checked: true,
      },
      room2: {
        adults: 1,
        children: 0,
        checked: false,
      },
      room3: {
        adults: 1,
        children: 0,
        checked: false,
      },
      room4: {
        adults: 1,
        children: 0,
        checked: false,
      },
    };

    expect(reducer(initialState, successAction)).toEqual(successObject);
  });
});
