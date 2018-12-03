export const SET_STATE_FROM_LOCAL_STORAGE = 'SET_STATE_FROM_LOCAL_STORAGE';
export const SET_ROOM_ENABLED = 'SET_ROOM_ENABLED';
export const UPDATE_ADULTS = 'UPDATE_ADULTS';
export const UPDATE_CHILDREN = 'UPDATE_CHILDREN';

export const setStateFromLocalStorage = rooms => ({
  type: SET_STATE_FROM_LOCAL_STORAGE,
  rooms,
});

export const setRoomEnabled = id => ({
  type: SET_ROOM_ENABLED,
  id,
});

export const updateAdults = (id, adults) => ({
  type: UPDATE_ADULTS,
  id,
  adults,
});

export const updateChildren = (id, children) => ({
  type: UPDATE_CHILDREN,
  id,
  children,
});
