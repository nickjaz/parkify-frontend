import superagent from 'superagent';

export const fetchLots = (lots) => ({
  type: 'FETCH_LOTS',
  payload: lots
});

export const createLot = (lot) => ({
  type: 'CREATE_LOT',
  payload: lot
});

export const updateLot = (lot) => ({
  type:'UPDATE_LOT',
  payload: lot
});

export const deleteLot = (lot) => ({
  type: 'DELETE_LOT',
  payload: lot
});

export const fetchLotsRequest = () => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.get(`${__API_URL__}/lots`)
  .set('Authorization', `Bearer ${auth}`)
  .then(response => {
    dispatch(fetchLots(response.body));
    return response;
  });
};

export const createLotRequest = (lot) => (dispatch, getState) => {
  let {auth} = getState();
  auth = JSON.parse(auth);
  auth = auth.tokenHash;
  console.log('auth:', auth);
  console.log('lot:', lot);

  return superagent.post(`${__API_URL__}/lot`)
  .set('Authorization', `Bearer ${auth}`)
  .send(lot)
  .then(response => {
    dispatch(createLot(lot));
    console.log('THE STATE AFTER THE GET:', getState());
    return response;
  });
};

export const updateLotRequest = (lot) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.put(`${__API_URL__}/lot/${lot._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .send(lot)
  .then(response => {
    dispatch(updateLot);
    return response;
  });
};

export const deleteLotRequest = (lot) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.delete(`${__API_URL__}/lot/${lot._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .then(response => {
    dispatch(deleteLotRequest(lot));
    return response;
  });
};