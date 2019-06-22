import Axios from 'axios';

const getProjects = () => new Promise((resolve, reject) => {
  Axios.get('https://biosite-19e41.firebaseio.com/projects')
    .then((resp) => {
      const projects = resp.data;
      console.error(resp);
      resolve(projects);
    })
    .catch(err => reject(err));
});

export default { getProjects };
