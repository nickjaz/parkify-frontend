import superagent from 'superagent';

export const createReservation = (reservation) => ({
  type: 'CREATE_RESERVATION',
  payload: reservation
});

export const updateReservation = (reservation) => ({
  type: 'UPDATE_RESERVATION',
  payload: reservation
});

export const deleteReservation = (reservation) => ({
  type: 'DELETE_RESERVATION',
  payload: reservation
});

export const createReservationRequest = (reservation) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.post(`${__API_URL__}/transaction`)
  .set('Authorization', `Bearer ${auth}`)
  .send(reservation)
  .then(response => {
    dispatch(createReservation(reservation));
    return response;
  });
};

export const updateReservationRequest = (reservation) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.put(`${__API_URL__}/transaction/${reservation._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .send(reservation)
  .then(response => {
    dispatch(updateReservation(reservation));
    return response;
  });
};

export const deleteReservationRequest = (reservation) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.delete(`${__API_URL__}/transaction/${reservation._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .then(response => {
    dispatch(deleteReservation(reservation));
    return response;
  });
};