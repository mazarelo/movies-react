import { SeriesApi } from '../api/seriesApi'

export const SERIE_SELECTED = 'SERIE_SELECTED'
export const LIST_SERIES = 'LIST_SERIES'
export const LOAD_SERIES_SUCCESS = 'LOAD_SERIES_SUCCESS'
export const ON_SERIE_CLICK = 'ON_SERIE_CLICK'
export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const LIST_PAGES = 'LIST_PAGES'
export const SHOW_EPISODES = 'SHOW_EPISODES'
export const HIDE_EPISODES = 'HIDE_EPISODES'

export const selectSerie = (serie) =>{
  return { type: SERIE_SELECTED, payload: serie }
}

export function getPagination(){
  return function(dispatch){
    return SeriesApi.getPagination().then(response=>{
      return dispatch({ type: LIST_PAGES, payload: response.data })
    })
  }
}

export function changePage(page){
  return function(dispatch){
    return SeriesApi.getPage(page).then(response=>{
      dispatch(loadSeriesSuccess(response.data))
    })
  }
}

export function onSerieClick(serie){
  return function(dispatch){
    return dispatch(getSerieById(serie._id)).then(()=>{
      return dispatch(openModal());
    })
  }
}

export function showEpisodes(){
  return { type: SHOW_EPISODES, payload: true }
}

export function hideEpisodes(){
  return { type: HIDE_EPISODES, payload: false }
}

export function openModal(){
  return { type: SHOW_MODAL, payload: true }
}

export function closeModal(){
  return function(dispatch){
    return dispatch(new Promise( (resolve, reject) => resolve({ type: HIDE_MODAL, payload: false }))).then(()=>{
      setTimeout(()=>{
        return dispatch(selectSerie(null))
      }, 700)
    })
  }
}

export function loadSeries() {  
  return function(dispatch) {
    return SeriesApi.getSeries().then(series => {
      return dispatch(loadSeriesSuccess(series.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getSerieById(id) {  
  return function(dispatch) {
    return SeriesApi.getSerie(id).then(serie => {
      return dispatch(selectSerie(serie.data))
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadSeriesSuccess(series) { 
  return { type: LIST_SERIES, payload: series };
}