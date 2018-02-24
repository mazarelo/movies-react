import {combineReducers} from 'redux'
import ActiveSerieReducer from './reducer-active-serie'
import SeriesReducer from './reducer-series'
import ModalReducer from './reducer-modal'
import PaginatorReducer from './reducer-paginator'

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    series: SeriesReducer,
    modal: ModalReducer,
    activeSerie: ActiveSerieReducer,
    pages: PaginatorReducer
});

export default allReducers
