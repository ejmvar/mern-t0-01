// // dispatch( fetchAll) 
// const fetchAll = {
//   type: "FETCH-ALL",
//   payload: []
// };

export const ACTION_TYPES = {
  CREATE: "CREATE", // NOTE: not used
  UPDATE: "UPDATE",
  DELETE: "DELETE", // NOTE: not used
  GET_ALL: "GET_ALL",
  GET_ONE: "GET_ONE",
  PRELOAD: "PRELOAD", // NOTE: Only for 1st time setup
};

// export const getAll=()=>{
//   return(dispatch=>{

//   })
// }


export const getAll = () => dispatch => {
  dispatch({
    type: ACTION_TYPES.GET_ALL,
    payload: []
  })

}