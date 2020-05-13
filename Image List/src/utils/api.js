import {URL, ACCESS_KEY} from './constants.js'

const API = {
  fetchList: (query) => {
    return fetch(`${URL}photos/?client_id=${ACCESS_KEY}&query=${query}`)
      .then(res => res.json())
  },
  searchList: (query) => {
    // search요청 코드 만드세요
  }
}

export default API;
