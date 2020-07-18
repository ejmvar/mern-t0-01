// // dispatch( fetchAll) 
// const fetchAll = {
//   type: "FETCH-ALL",
//   payload: []
// };

import api from '../services/api';

export const ACTION_TYPES = {
  CREATE: "CREATE", // NOTE: not used
  UPDATE: "UPDATE",
  DELETE: "DELETE", // NOTE: not used
  GET_ALL: "GET_ALL",
  GET_ONE: "GET_ONE",
  PRELOAD: "PRELOAD", // NOTE: Only for 1st time setup
};

export const getAll = () => dispatch => {
  // effects
  api.feriadosAPI.getAll()
    .then((res) => {

      dispatch({
        type: ACTION_TYPES.GET_ALL,
        payload: res.data
      })
    }).catch((err) => {
      const msg = "Feriados API GetALL:" + JSON.stringify(err);
      console.error(msg);
    });






}