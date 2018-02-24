/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */
import { SHOW_MODAL, HIDE_MODAL } from '../actions'

// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = {showModal: false}, action) {
  switch (action.type) {
    case SHOW_MODAL:{
      return {...state, showModal: true };
    }
    case HIDE_MODAL:{
      return {...state, showModal: false };
    }
    default :{
      return state
    }
  }
}
