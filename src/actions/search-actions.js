import superagent from 'superagent';

export const search = function (results) {
  return {
    type: 'SEARCH',
    payload: results
  };
};

export const clearSearch = function () {
  return {
    type: 'SEARCH',
    payload: null
  };
};

export const searchRequest = (query) => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.get(`${__API_URL__}/search`)
  .query({ query: query })
  .set('Authorization', `Bearer ${auth}`)
  .then(response => {
    dispatch(search(response.body));
    return response;
  });
};