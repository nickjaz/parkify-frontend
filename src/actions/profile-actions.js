import superagent from 'superagent';

export const createProfile = (profile) => ({
  type: 'PROFILE_CREATE',
  payload: profile
});

export const updateProfile = (profile) => ({
  type: 'PROFILE_UPDATE',
  payload: profile
});

export const createProfileRequest = () => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.post(`${__API_URL__}/profiles`)
  .set('Authorization', `Bearer ${auth}`)
  .then( res => {
    dispatch(createProfile(res.body));
    return res;
  });
};

export const updateProfileRequest = (profile) => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.put(`${__API_URL__}/profiles.${profile._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .then( res => {
    dispatch(updateProfile(res.body));
    return res;
  });
};

export const fetchProfileRequest = () => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.get(`${__API_URL__}/profiles/me`)
  .set('Authorization', `Bearer ${auth}`)
  .then( res => {
    dispatch(createProfile(res.body));
    return res;
  });
};
