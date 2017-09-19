import superagent from 'superagent';
import * as util from '../lib/utilities.js';
import {createProfileRequest, fetchProfileRequest} from './profile-actions.js';

export const setToken = (token) => ({
  type: 'SET_TOKEN',
  payload: token
});

export const logout = () => {
  util.deleteCookie('X-Parkify-Token');
  return { type: 'LOGOUT' };
};

export const signupRequest = (user) => (dispatch) => {
  return superagent.post(`${__API_URL__}/signup`)
  .withCredentials()
  .send(user)
  .then( response => {
    dispatch(setToken(response.text));
    dispatch(createProfileRequest({ user: user.name, email: user.email }));
    try {
      localStorage.token = response.text;
    } catch (error) {
      console.log(error);
    }
    return response;
  });
};

export const loginRequest = (user) => (dispatch) => {
  return superagent.get(`${__API_URL__}/signin`)
  .withCredentials()
  .auth(user.name, user.password)
  .then(response => {
    dispatch(setToken(response.text));
    dispatch(fetchProfileRequest());
    return response;
  });
};
