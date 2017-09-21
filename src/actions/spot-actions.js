import superagent from 'superagent';

export const createSpot = (spot) => ({
  type: 'CREATE_SPOT',
  payload: spot
});

export const updateSpot = (spot) => ({
  type: 'UPDATE_SPOT',
  payload: spot
});

export const deleteSpot = (spot) => ({
  type: 'DELETE_SPOT',
  payload: spot
});

export const createSpotRequest = (spot) => (dispatch, getState) => {
  let {auth} = getState();
  console.log('**STATE**', getState());
  console.log('**SPOT**', spot);

  return superagent.post(`${__API_URL__}/lot/${spot.lotID}/spot`)
  .set('Authorization', `Bearer ${auth}`)
  .send(spot)
  .then(response => {
    dispatch(createSpot(spot));
    return response;
  });
};

export const updateSpotRequest = (spot) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.put(`${__API_URL__}/lot/${spot.lotID}/spot/${spot._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .send(spot)
  .then(response => {
    dispatch(updateSpot(spot));
    return response;
  });
};

export const deleteSpotRequest = (spot) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.delete(`${__API_URL__}/lot/${spot.lotID}/spot/${spot._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .then(response => {
    dispatch(deleteSpot(spot));
    return response;
  });
};
