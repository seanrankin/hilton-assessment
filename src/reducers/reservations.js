import {
  SET_STATE_FROM_LOCAL_STORAGE,
  SET_ROOM_ENABLED,
  UPDATE_ADULTS,
  UPDATE_CHILDREN,
} from '../actions/reservations';

export const initialState = {
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
    checked: false,
  },
  room4: {
    adults: 1,
    children: 0,
    checked: false,
  },
};

export default function reservations(state = initialState, action) {
  switch (action.type) {
    case SET_STATE_FROM_LOCAL_STORAGE: {
      return {
        ...state,
        ...action.rooms,
      };
    }
    case SET_ROOM_ENABLED: {
      const room = state[`room${action.id}`];
      return {
        ...state,
        [`room${action.id}`]: { ...room, checked: !room.checked },
      };
    }
    case UPDATE_ADULTS: {
      const room = state[`room${action.id}`];
      return {
        ...state,
        [`room${action.id}`]: { ...room, adults: action.adults },
      };
    }
    case UPDATE_CHILDREN: {
      const room = state[`room${action.id}`];
      return {
        ...state,
        [`room${action.id}`]: { ...room, children: action.children },
      };
    }
    default:
      return state;
  }
}
