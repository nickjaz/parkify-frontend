import superagent from 'superagent';

export const search = function (results) {
  return {
    type: 'SEARCH',
    payload: results
  }
};

export const searchRequest = (query) => (dispatch, getState) => {
  let state = getState();
  return superagent.get(`${__API_URL__}/search`)
  .query({ query: query })
  .set('Authorization', `Bearer ${state.token}`)
  .end(function (error, response) {
    let results = response.body.results;
    dispatch(search(results))
  });
};