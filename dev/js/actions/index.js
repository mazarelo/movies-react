import { SeriesApi } from '../api/seriesApi'

export const SERIE_SELECTED = 'SERIE_SELECTED'
export const LIST_SERIES = 'LIST_SERIES'
export const LOAD_SERIES_SUCCESS = 'LOAD_SERIES_SUCCESS'
export const ON_SERIE_CLICK = 'ON_SERIE_CLICK'
export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL'
export const LIST_PAGES = 'LIST_PAGES'

export const selectSerie = (serie) =>{
  return { type: SERIE_SELECTED, payload: serie }
}

export function getPagination(){
  return function(dispatch){
    SeriesApi.getPagination().then(response=>{
      dispatch({ type: LIST_PAGES, payload: response.data })
    })
  }
}

export function changePage(page){
  return function(dispatch){
    SeriesApi.getPage(page).then(response=>{
      dispatch(loadSeriesSuccess(response.data))
    })
  }
}

export function onSerieClick(serie){
  return function(dispatch){
    dispatch(getSerieById(serie._id)).then(()=>{
      dispatch(openModal());
    })
  }
}

export function openModal(){
  return { type: SHOW_MODAL, payload: true }
}

export function closeModal(){
  return function(dispatch){
    dispatch(new Promise( (resolve, reject) => resolve({ type: HIDE_MODAL, payload: false }))).then(()=>{
      setTimeout(()=>{
        dispatch(selectSerie(null))
      }, 700)
    })
  }
}

export function loadSeries() {  
  return function(dispatch) {
    SeriesApi.getSeries().then(series => {
      dispatch(loadSeriesSuccess(series.data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function getSerieById(id) {  
  return function(dispatch) {
    SeriesApi.getSerie(id).then(serie => {
      dispatch(selectSerie(serie.data))
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadSeriesSuccess(series) { 
  return { type: LIST_SERIES, payload: series };
}