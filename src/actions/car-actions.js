import superagent from 'superagent';

export const fetchCars = (cars) => ({
  type: 'FETCH_CARS',
  payload: cars
});

export const createCar = (car) => ({
  type: 'CREATE_CAR',
  payload: car
});

export const updateCar = (car) => ({
  type:'UPDATE_CAR',
  payload: car
});

export const deleteCar = (car) => ({
  type: 'DELETE_CAR',
  payload: car
});

export const fetchCarsRequest = () => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.get(`${__API_URL__}/cars`)
  .set('Authorization', `Bearer ${auth}`)
  .then(response => {
    dispatch(fetchCars(response.body));
    return response;
  });
};

export const createCarRequest = (car) => (dispatch,getState) => {
  let {auth} = getState();

  return superagent.post(`${__API_URL__}/car`)
  .set('Authorization', `Bearer ${auth}`)
  .send(car)
  .then(response => {
    dispatch(fetchCarsRequest());
    return response;
  });
};

export const updateCarRequest = (car) => (dispatch, getState) => {
  let {auth} = getState();
  console.log('CAR in ACTION', car);

  return superagent.put(`${__API_URL__}/car/${car._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .send(car)
  .then(response => {
    dispatch(updateCar(response.body));
    return response;
  });
};

export const deleteCarRequest = (car) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.delete(`${__API_URL__}/car/${car._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .then(response => {
    dispatch(deleteCar(car));
    return response;
  });
};
