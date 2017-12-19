import axios from 'axios';

function getprofile(name) {
  return axios.get(`https://api.github.com/users/${name}`)
  .then((response) => {
    //console.log('$$$', response.data.avatar_url);
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
};

export default getprofile;


//getprofile ==> axios
//callgetProfile (name) {getprofile(name).then(response => this.setState({avatar_url}))}