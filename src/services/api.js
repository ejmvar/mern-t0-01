

import axios from 'axios';


// FIXME: move to ".env"
const URL_BASE = "http://192.168.1.53:57016";
const URL_PreLd = "/feriados/many";
const URL_GetAll = "/feriados/many";
const URL_GetOne = "/feriados/"; // "/5f123f2ea7a9b244bb5c40bd";
const URL_UpdOne = "/feriados/"; // "/5f123f2ea7a9b244bb5c40bd";

export default {
  feriadosAPI(url = URL_BASE) {
    console.log("feriadosAPI");
    return ({
      getAll: () => axios.get(url + URL_GetAll),
      getOne: (id) => axios.get(url + URL_GetOne + id),
      // delete: (id) => axios.delete(url + URL_GetOne + id), // not used
      // create: rec => axios.post(URL_BASE + URL_GetOne, rec), // not used
      update: (id, rec) => axios.put(URL_BASE + URL_UpdOne + id),
      preload: (recs) => axios.post(URL_BASE + URL_PreLd, recs),
    });
  }
};