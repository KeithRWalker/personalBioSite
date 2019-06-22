import Axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  Axios.get(`${firebaseUrl}/projects.json`)
    .then((resp) => {
      const respData = resp.data;
      const projectsArray = [];
      Object.keys(respData).forEach((project) => {
        respData[project].id = project;
        projectsArray.push(respData[project]);
      });
      resolve(projectsArray);
    })
    .catch(err => reject(err));
});

export default { getProjects };
