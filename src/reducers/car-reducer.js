export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
    case 'FETCH_CARS':
      return payload;

    case 'CREATE_CAR':
      return [payload, ...state];

    case 'UPDATE_CAR':
      return state.map(car => car._id === payload.id ? payload : car);

    case 'DELETE_CAR':
      return state.filter(car => car._id !== payload.id);

    default: return state;
  }
};
