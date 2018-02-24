/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */
import {LIST_SERIES} from '../actions'

export default function (state = [], action) {
    switch(action.type){
      case LIST_SERIES:{
        return action.payload
      }
      default :{
        return state
      }
    }
}
