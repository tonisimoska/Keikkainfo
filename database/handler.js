import axios from 'axios';

const baseUrl = "http://localhost:3001/keikat";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => {
    return response.data;
  });
}
const addGig = newGig => {
  const request = axios.post(baseUrl, newGig);
  return request.then(response => {
    return response.data;
  });
}

const updateGig = (id, uGig) => {
  return axios.put(`${baseUrl}/${id}`, uGig);
}
const removeGig = id => {
  return axios.delete(`${baseUrl}/${id}`);
}
const getUniques = (data, col) => {
  var uniques = [];
  data.map(e => {
    if(!uniques.includes(e[col])) {
      uniques.push(e[col]);
    }
  });
  return uniques;
}
const filterAsLocation = (data, filter, col) => {
  var filtered = [];
  data.map(e => {
    if(e[col] === filter) {
      filtered.push(e);
    }
  });
  return filtered;
}

export default {
  getAll: getAll,
  addGig: addGig,
  updateGig: updateGig,
  removeGig: removeGig,
  getUniques: getUniques,
  filterAsLocation: filterAsLocation
}
