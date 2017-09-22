let validateProfileCreate = (profile) => {
  if(!profile.name || !profile._id || !profile.email) {
    throw new Error('VALIDATION ERROR: profile requires name and email');
  }
};

export default (state=null, action) => {
  let {type, payload} = action;

  switch (type) {
    case 'CREATE_PROFILE' :
      validateProfileCreate(payload);
      return payload;

    case 'UPDATE_PROFILE' :
      validateProfileCreate(payload);
      if(!state) throw new Error('USAGE ERROR: user must create profile first');
      validateProfileCreate(payload);
      return {...state, ...payload};

    case 'LOGOUT' :
      return null;

    case 'FETCH_CARS':
      return {...state, cars: payload};

    case 'CREATE_CAR':
      return {...state, cars: [...state.cars, payload]};

    case 'UPDATE_CAR':
      return {...state, cars: state.cars.map(car => car._id === payload._id ? payload : car)};

    case 'DELETE_CAR':
      return {...state, cars: state.cars.filter(car => car._id !== payload._id)};

    case 'CREATE_RESERVATION':      
      return {...state, transactions: [...state.transactions, payload]};

    default :
      return state;
  }
};
