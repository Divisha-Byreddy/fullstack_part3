import axios from 'axios';
const url = '/api/persons'

const getPersons = () =>{
  const request = axios.get(url)
  return request.then(response => response.data)
}

const addPerson = newPerson =>{
  const request = axios.post(url,newPerson)
  return request.then(response => response.data)
}

const removePerson = id => {
  var request = axios.delete(`${url}/${id}`)
  return request.then(response => response.data)
}

const updatePerson = (id,updatedPerson) =>{
  var request = axios.put(`${url}/${id}`,updatedPerson)
  return request.then(response => response.data)
}

export default {getPersons , addPerson,removePerson,updatePerson}