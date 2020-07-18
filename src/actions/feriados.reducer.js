import {
  ACTION_TYPES
} from "./feriados.actions";


const initialState = {
  list: []
}
// state holds and offers: feriadosMessage.list
// export const feriadosMessage = (state = initialState, action) => {
export const feriadosReducer = (state = initialState, action) => {

  switch (action.type) {
    case ACTION_TYPES.GET_ALL:
      return {
        ...state, list: [...action.payload]
      }

      default:
        return state;
  }
}