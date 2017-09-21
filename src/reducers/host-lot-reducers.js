export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
    case 'FETCH_LOTS':
      return payload;

    case 'CREATE_LOT':
      return [payload, ...state];

    case 'UPDATE_LOT':
      return state.map(lot => lot._id === payload._id ? payload : lot);

    case 'DELETE_LOT':
      return state.filter(lot => lot._id !== payload._id);

    case 'CREATE_SPOT':
      return {...state, spots: [...state.spots, payload]};

    default: return state;
  }
};
