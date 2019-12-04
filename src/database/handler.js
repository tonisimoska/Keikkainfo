import axios from 'axios';

const baseUrl = "http://localhost:3001/keikat";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => {
    return response.data;
  });
}
const addNote = newNote => {
  const request = axios.post(baseUrl, newNote);
  return request.then(response => {
    return response.data;
  });
}

const updateNote = (id, updateNote) => {
  return axios.put(`${baseUrl}/${id}`, updateNote);
}
const removeNote = id => {
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
  addNote: addNote,
  updateNote: updateNote,
  removeNote: removeNote,
  getUniques: getUniques,
  filterAsLocation: filterAsLocation
}
