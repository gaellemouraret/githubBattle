import axios from 'axios';

function getFollowers(name) {
  return axios.get(`https://api.github.com/users/${name}`)
  .then((response) => {
    return response.data.followers
  })
  .catch(function (error) {
    console.log(error);
  });
};

export default getFollowers;
