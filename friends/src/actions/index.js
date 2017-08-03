import axios from 'axios';

export const addFriend = (name, age, email) => {
  const promise = axios.post('http://localhost:5000/new-friend', {name, age, email});
  return {
  type: 'ADD_FRIEND',
  payload: promise
  } 
}

export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
  type: 'GET_FRIENDS',
  payload: promise
  }
}

export const frenemy = () => {
  const promise = axios.delete('http://localhost:5000/delete-friend');
  return {
    type: 'DELETE_FRIEND',
    payload: promise
  }
}