import axios from 'axios';

export function listNewPositions() {
  return axios
    .get('http://localhost:8001/jobs/newPositions')
    .then(response => response.data)
    .catch(err => {
      console.log(err);
    });
}

export const addNewPositions = newPos => {
  return axios
    .post('http://localhost:8001/jobs/addPosition', {
      name: newPos.name,
      description: newPos.description,

    })
    .then(response => {
      console.log('Registered');
    });
};
