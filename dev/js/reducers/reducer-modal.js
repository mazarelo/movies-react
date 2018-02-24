/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */
import { SHOW_MODAL, HIDE_MODAL, SHOW_EPISODES, HIDE_EPISODES } from '../actions'

// "state = null" is set so that we don't throw an error when app first boots up
export default function (state = {showModal: false, showEpisodes: false}, action) {
  switch (action.type) {
    case SHOW_MODAL:{
      return {...state, showModal: true }
    }
    case HIDE_MODAL:{
      return {...state, showModal: false }
    }
    case SHOW_EPISODES:{
      return {...state, showEpisodes: true }
    }
    case HIDE_EPISODES:{
      return { ...state, showEpisodes: false }
    }
    default :{
      return state
    }
  }
}
