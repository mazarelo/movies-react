import axios from 'axios'

export class SeriesApi {
  static getSeries(){
    // Make a request for a user with a given ID
    return axios.get('https://tv-v2.api-fetch.website/shows/1')
    //return new Promise((resolve, reject) => resolve([{ id: 1, key: 1, title: 'new', year: 1989}]))
  }

  static getSerie(id){
    return axios.get(`https://tv-v2.api-fetch.website/show/${id}`)
  }

  static getPage(page){
    return axios.get(`https://tv-v2.api-fetch.website/${page}`)
  }

  static getPagination(){
    return axios.get(`https://tv-v2.api-fetch.website/shows`)
  }
}